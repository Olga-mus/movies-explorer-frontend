import "./Main.css";
import Chief from "../Chief/Chief";
import About from "../About/About";
import Technology from "../Technology/Technology";
import Student from "../Student/Student";
import Portfolio from "../Portfolio/Portfolio";

function Main() {
  return (
    <div className="main">
      <main>
        <Chief />
        <About />
        <Technology />
        <Student />
        <Portfolio />
      </main>
    </div>
  );
}
export default Main;
