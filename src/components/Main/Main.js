import "./Main.css";
import Chief from "../Chief/Chief";
import About from "../About/About";
import Technology from "../Technology/Technology";
import Student from "../Student/Student";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <div className="main">
    <Header />
      <main>
        <Chief />
        <About />
        <Technology />
        <Student />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
export default Main;
