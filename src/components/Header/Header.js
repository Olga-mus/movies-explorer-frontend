import './Header.css'
import { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HeaderNav from '../HeaderNav/HeaderNav'
import HeaderNavLog from '../HeaderNavLog/HeaderNavLog'
import AccountButton from '../AccountButton/AccountButton'
import IconMenu from '../IconMenu/IconMenu'
import logo from '../../images/header/header-logo.svg'
import { AppContext } from '../../contexts/AppContext'
import Menu from '../Menu/Menu'

function Header() {
  const { loggedIn } = useContext(AppContext)
  const [isOpenMenu, setOpenMenu] = useState(false)

  return loggedIn ? (
    <div className="header-log">
      <header className="header-log__menu">
        <div className="header-log__nav">
          <Link className="header-log__link link" to="/">
            <img src={logo} className="header-log__logo" alt="лого"></img>
          </Link>
          <div className="header-log__none">
            <HeaderNavLog />
          </div>
        </div>
        <div className="header-log__none">
          <AccountButton />
        </div>
        <div className="header-log__icon">
          <IconMenu setOpenMenu={setOpenMenu} />
        </div>
      </header>
      {isOpenMenu && <Menu setOpenMenu={setOpenMenu} />}
    </div>
  ) : (
    <div className="header">
      <header className="header__menu">
        <div className="header__block">
          <Link className="header__link link" to="/">
            <img src={logo} className="header__logo" alt="лого"></img>
          </Link>
          <HeaderNav />
        </div>
      </header>
    </div>
  )
}

export default Header
