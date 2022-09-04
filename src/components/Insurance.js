import '../styles/Insurance.css'
import nextPage from '../nextPage.png'
import previousPage from '../previousPage.png'
import { Link } from 'react-router-dom'

function Insurance() {
  return (
    <div className="Insurance">
      <header className="Insurance-header">
        <p>
          <h1>What is Insurance?</h1>
        </p>
        <br />
        <p>
          <Link to={"/"}>
            <img src={previousPage} alt="WelcomePage" />
          </Link>
          <Link to={"/InsuranceType"}>
            <img src={nextPage} alt="InsuranceTypePage" />
          </Link>
        </p>
      </header>
    </div>
  );
}

export default Insurance