import "./AddBlock.css";
import { useLocation } from "react-router-dom";

function AddBlock() {
  const location = useLocation();
  if (location.pathname === "/movies") {
    return (
      <section className="add">
        <div className="add__more">
          <button type="button" className="add__more-button">Ещё</button>
        </div>
      </section>
    );
  }
}

export default AddBlock;
