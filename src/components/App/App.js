import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import {
  getWeatherForecast,
  parseWeatherData,
  parseLocationData,
  parseWeatherBannerData,
} from "../../utils/weatherApi";
import "./App.css";
import { useState, useEffect } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AddItemModal from "../AddItemModal/AddItemModal";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import Profile from "../Profile/Profile";
import EditProfileModal from "../Profile/EditProfileModal/EditProfileModal";
import LoginModal from "../LoginModal/LoginModal";
import api from "../../utils/api";
import auth from "../../utils/auth";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [weatherBanner, setWeatherBanner] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleSignupModal = () => {
    setActiveModal("signup");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleEditProfileModal = () => {
    setActiveModal("profile");
  };

  const handleToken = (token) => {
    // if (token) {
    return auth
      .checkToken(token)
      .then((res) => {
        setCurrentUser(res.data);
        setLoggedIn(true);
      })
      .catch(console.error);
    // }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleConfirmModal = () => {
    setActiveModal("confirm");
  };

  const handleAddItem = (values) => {
    setToken(localStorage.getItem("jwt"));
    api
      .addItem(values, token)
      .then((res) => {
        setClothingItems([res.data, ...clothingItems]);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleCardDelete = (cardItem) => {
    setToken(localStorage.getItem("jwt"));
    api
      .removeItem(cardItem, token)
      .then(() => {
        const newClothingItems = clothingItems?.filter((card) => {
          return card._id !== cardItem._id;
        });
        setClothingItems(newClothingItems);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleSignUp = (user) => {
    const { email, password } = user;
    auth
      .register(user)
      .then((res) => {
        handleLogIn({ email, password });
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleLogIn = (user) => {
    auth
      .signin(user)
      .then((res) => {
        if (res.token) {
          // setLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          handleToken(res.token);
          handleCloseModal();
        }
      })
      .catch(console.error);
  };

  const handleUserChanges = (data) => {
    setToken(localStorage.getItem("jwt"));
    auth
      .editProfile(data, token)
      .then((res) => {
        setCurrentUser(res.data);
        setLoggedIn(true);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleLikeClick = ({ _id, isLiked, user }) => {
    console.log(_id);
    setToken(localStorage.getItem("jwt"));
    !isLiked
      ? api
          .addLike(_id, user, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((card) => (card._id === _id ? updatedCard : card))
            );
          })
          .catch(console.error)
      : api
          .removeLike(_id, user, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((card) => (card._id === _id ? updatedCard : card))
            );
          })
          .catch(console.error);
  };

  useEffect(() => {
    getWeatherForecast()
      .then((data) => {
        setTemp(parseWeatherData(data));
        setLocation(parseLocationData(data));
        setWeatherBanner(parseWeatherBannerData(data));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    api
      .getItemList()
      .then((res) => {
        setClothingItems(Object.values(res.data));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (token) {
      handleToken(token);
      // .finally(() => {
      //   setLoggedIn(true);
      // });
    } else {
      setLoggedIn(false);
    }
  }, [token]);

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);
  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <CurrentUserContext.Provider value={currentUser}>
          <Header
            placeName={location}
            onCreateModal={handleCreateModal}
            onLogInModal={handleLoginModal}
            onSignUpModal={handleSignupModal}
            loggedIn={loggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                weatherBannerInfo={weatherBanner}
                onSelectCard={handleSelectedCard}
                onCardLike={handleLikeClick}
                clothingItems={clothingItems}
                loggedIn={loggedIn}
              />
            </Route>
            <ProtectedRoute path="/profile" loggedIn={loggedIn}>
              <Profile
                clothingItems={clothingItems}
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
                onEditProfile={handleEditProfileModal}
                onLogOut={handleLogout}
                onCardLike={handleLikeClick}
                loggedIn={loggedIn}
              />
            </ProtectedRoute>
          </Switch>

          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              onAddItem={handleAddItem}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleConfirmModal}
              loggedIn={loggedIn}
            />
          )}
          {activeModal === "signup" && (
            <RegisterModal
              onSignUp={handleSignUp}
              onClose={handleCloseModal}
              handleLogin={handleLoginModal}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleSignUp={handleSignupModal}
              onClose={handleCloseModal}
              onLogin={handleLogIn}
            />
          )}
          {activeModal === "profile" && (
            <EditProfileModal
              handleCloseModal={handleCloseModal}
              onUserChanges={handleUserChanges}
            />
          )}
          {activeModal === "confirm" && (
            <ConfirmModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleCardDelete}
            />
          )}
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
