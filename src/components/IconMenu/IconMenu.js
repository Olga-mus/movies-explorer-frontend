import './IconMenu.css'
import '../App/App.css'
import icon from '../../images/profile/icon-menu.svg'

function IconMenu({ setOpenMenu }) {
  return (
    <div className="icon-menu">
      <button
        type="button"
        className="icon-menu__button"
        onClick={() => setOpenMenu(true)}
      >
        <img alt="иконка меню" className="icon-menu__img" src={icon} />
      </button>
    </div>
  )
}

export default IconMenu
