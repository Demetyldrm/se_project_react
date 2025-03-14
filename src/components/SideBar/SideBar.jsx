import avatar from "../../assets/avatar.svg";
import React from "react";
import "../Profile/Profile.css";
import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ handleEditProfileClick, handleLogOutClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img
          src={currentUser?.avatar}
          alt={currentUser?.name}
          className="sidebar__user_avatar"
        />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <div className="sidebar__buttons">
        <button
          onClick={handleEditProfileClick}
          type="button"
          className="sidebar__change-profile"
        >
          Change profile data
        </button>
        <button onClick={handleLogOutClick} className="sidebar__logout">
          Log out
        </button>
      </div>
    </div>
  );
}
export default SideBar;
