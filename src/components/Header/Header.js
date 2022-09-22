import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderNavLog from "../HeaderNavLog/HeaderNavLog";
import AccountButton from "../AccountButton/AccountButton";
import IconMenu from "../IconMenu/IconMenu";
import logo from "../../images/header/header-logo.svg";

function Header() {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <div className="header">
        <header className="header__menu">
          <div className="header__block">
            <Link className="header__link link" target="_blank" to="/">
              <img src={logo} className="header__logo" alt="лого"></img>
            </Link>
            <HeaderNav />
          </div>
        </header>
      </div>
    );
  } else if (
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile"
  ) {
    return (
      <div className="header-log">
        <header className="header-log__menu">
          <div className="header-log__nav">
            <Link className="header-log__link link" target="_blank" to="/">
              <img src={logo} className="header-log__logo" alt="лого"></img>
            </Link>
            <div className="header-log__none">
              <HeaderNavLog />
            </div>
          </div>
          <div className="header-log__none">
            <Link target="_blank" to="/profile">
              <AccountButton />
            </Link>
          </div>
          <div className="header-log__icon">
            <IconMenu />
          </div>
        </header>
      </div>
    );
  } else if (location.pathname === "/signup") {
    return (
      <div className="header-register">
        <header className="header-register__menu">
          <Link className="header-register__link link" target="_blank" to="/">
            <img src={logo} className="header-register__logo" alt="лого"></img>
          </Link>
          <h1 className="header-register__title">Добро пожаловать!</h1>
        </header>
      </div>
    );
  } else if (location.pathname === "/signin") {
    return (
      <div className="header-login">
        <header className="header-login__menu">
          <Link className="header-login__link link" target="_blank" to="/">
            <img src={logo} className="header-login__logo" alt="лого"></img>
          </Link>
          <h1 className="header-login__title">Рады видеть!</h1>
        </header>
      </div>
    );
  }
}

///////////////////////////////////////////////////////////////////////////////////////////
// const headerNav = (
//   <div className="header">
//           <header className="header__menu">
//             <div className="header__block">
//               <Link className="header__link link" target="_blank" to="/">
//                  <img src={logo} className="header__logo" alt="лого"></img>
//                </Link>
//               <HeaderNav />
//              </div>
//            </header>
//          </div>
// );

// const headerNavLog = (
//   <div className="header-log">
//          <header className="header-log__menu">
//            <div className="header-log__nav">
//              <Link className="header-log__link link" target="_blank" to="/">
//                <img src={logo} className="header-log__logo" alt="лого"></img>
//              </Link>
//              <div className="header-log__none">
//                <HeaderNavLog />
//              </div>
//           </div>
//            <div className="header-log__none">
//              <Link target="_blank" to="/profile">
//                <AccountButton />
//              </Link>
//            </div>
//            <div className="header-log__icon">
//              <IconMenu />
//            </div>
//          </header>
//        </div>
// );

// const headerSignup = (
//   <div className="header-register">
//         <header className="header-register__menu">
//            <Link className="header-register__link link" target="_blank" to="/">
//             <img src={logo} className="header-register__logo" alt="лого"></img>
//           </Link>
//           <h1 className="header-register__title">Добро пожаловать!</h1>
//          </header>
//        </div>
// );

// const headerSignin = (
//         <div className="header-login">
//           <header className="header-login__menu">
//              <Link className="header-login__link link" target="_blank" to="/">
//               <img src={logo} className="header-login__logo" alt="лого"></img>
//             </Link>
//             <h1 className="header-login__title">Рады видеть!</h1>
//           </header>
//          </div>
// );

// function Header() {
//   const location = useLocation();
//   return (
//     <>
//       { location.pathname === "/" && headerNav }
//       { location.pathname === "/movies" && headerNavLog }
//       { location.pathname === "/saved-movies" && headerNavLog }
//       { location.pathname === "/profile" && headerNavLog }
//       { location.pathname === "/signup" && headerSignup }
//       { location.pathname === "/signin" && headerSignin }
//     </>
     
//   );  
// }

///////////////////////////////////////////////////////////////////////////////////////

// const headerNav = (
//   <div className="header">
//           <header className="header__menu">
//             <div className="header__block">
//               <Link className="header__link link" target="_blank" to="/">
//                  <img src={logo} className="header__logo" alt="лого"></img>
//                </Link>
//               <HeaderNav />
//              </div>
//            </header>
//          </div>
// );

// const headerNavLog = (
//   <div className="header-log">
//          <header className="header-log__menu">
//            <div className="header-log__nav">
//              <Link className="header-log__link link" target="_blank" to="/">
//                <img src={logo} className="header-log__logo" alt="лого"></img>
//              </Link>
//              <div className="header-log__none">
//                <HeaderNavLog />
//              </div>
//           </div>
//            <div className="header-log__none">
//              <Link target="_blank" to="/profile">
//                <AccountButton />
//              </Link>
//            </div>
//            <div className="header-log__icon">
//              <IconMenu />
//            </div>
//          </header>
//        </div>
// );

// const headerSignup = (
//   <div className="header-register">
//         <header className="header-register__menu">
//            <Link className="header-register__link link" target="_blank" to="/">
//             <img src={logo} className="header-register__logo" alt="лого"></img>
//           </Link>
//           <h1 className="header-register__title">Добро пожаловать!</h1>
//          </header>
//        </div>
// );

// const headerSignin = (
//         <div className="header-login">
//           <header className="header-login__menu">
//              <Link className="header-login__link link" target="_blank" to="/">
//               <img src={logo} className="header-login__logo" alt="лого"></img>
//             </Link>
//             <h1 className="header-login__title">Рады видеть!</h1>
//           </header>
//          </div>
// );

// function Header() {
//   return (
//     <>
//       { loggedIn === "/" && headerNav }
//       { Movies && headerNavLog }
//       { Movies && headerNavLog }
//       { Movies && headerNavLog }
//       { !loggedIn && headerSignup }
//       { !loggedIn && headerSignin }
//     </>
     
//   );  
// }


export default Header;
