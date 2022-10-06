import '../App/App.css'
import './AccountButton.css'
import { Link } from 'react-router-dom'

function AccountButton() {
  return (
    <Link className="account__button link" to="/profile">
      Аккаунт
    </Link>
  )
}

export default AccountButton
