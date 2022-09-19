import "../App/App.css";
import "./AccountButton.css";
import { Link } from "react-router-dom";

function AccountButton() {
  return (
    <Link to="/profile">
      <button className="account__button link">Аккаунт</button>
    </Link>
  );
}

export default AccountButton;
