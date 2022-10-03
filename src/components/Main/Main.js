import "./Main.css";
import Chief from "../Chief/Chief";
import About from "../About/About";
import Technology from "../Technology/Technology";
import Student from "../Student/Student";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PopupEditProfile from "../PopupEditProfile/PopupEditProfile";

function Main({loggedIn}) {
  return (
    <div className="main">
    <Header loggedIn={loggedIn}/>
      <main>
        <Chief />
        <About />
        <Technology />
        <Student />
        <Portfolio />
        <PopupEditProfile />
      </main>
      <Footer />
    </div>
  );
}
export default Main;
