import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ cards, onSelectedCard, onCardDelete, onAddNewClick }) => {
  return (
    <div className="profile">
      <section className="profile__side">
        <SideBar />
      </section>
      <section className="profile__cards">
        <ClothesSection
          clothingItems={cards}
          onAddNewClick={onAddNewClick}
          onSelectCard={onSelectedCard}
          // onCardDelete={onCardDelete}
        />
      </section>
    </div>
  );
};

export default Profile;
