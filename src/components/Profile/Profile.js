import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  onEditProfile,
  onLogOut,
  loggedIn,
  onCardLike,
}) => {
  return (
    <div className="profile">
      <section className="profile__side">
        <SideBar />
        <div className="profile__sideBar">
          <button
            className="profile__sideBar-editButton"
            type="button"
            onClick={onEditProfile}
          >
            Change profile data
          </button>
          <button
            className="profile__sideBar-logOut"
            type="button"
            onClick={onLogOut}
          >
            Log out
          </button>
        </div>
      </section>
      <section className="profile__cards">
        <ClothesSection
          clothingItems={clothingItems}
          onAddNewClick={onCreateModal}
          onSelectCard={onSelectCard}
          onCardLike={onCardLike}
          loggedIn={loggedIn}
        />
      </section>
    </div>
  );
};

export default Profile;
