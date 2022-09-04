import logo from '../logo.svg'
import nextPage from '../nextPage.png'
import '../styles/Welcome.css'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <p>
          <h1>Welcome to Knowledge Translation</h1>
        </p>
        <img src={logo} className="Welcome-logo" alt="logo" />
        <br />
        <Link to={"/Insurance"}>
          <img src={nextPage} alt="InsurancePage" />
        </Link>
      </header>
    </div>
  );
}

export default Welcome;
