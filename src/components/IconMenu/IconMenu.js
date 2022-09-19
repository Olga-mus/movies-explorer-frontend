import "./IconMenu.css";
import "../App/App.css";
import icon from "../../images/profile/icon-menu.svg";

function IconMenu() {
  return (
    <div className="icon-menu">
      <button className="icon-menu__button">
        <img alt="иконка меню" className="icon-menu__img" src={icon} />
      </button>
    </div>
  );
}

export default IconMenu;
