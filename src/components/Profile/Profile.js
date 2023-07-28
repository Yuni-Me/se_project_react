import "./Profile.css";

const Profile = ({ cards, onCardClick, onCardDelete, onAddNewClick }) => {
  return (
    <div className="profile">
      <section className="profile__side">
        <SideBar />
      </section>
      <section className="profile__cards">
        <ClothesSection
          sectionData={cards}
          onAddNewClicks={onAddNewClicks}
          onCardClick={onCardClick}
          onCardDelete={onCardDelete}
        />
      </section>
    </div>
  );
};

export default Profile;
