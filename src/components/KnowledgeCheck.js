import '../styles/KnowledgeCheck.css'
import nextPage from '../nextPage.png'
import previousPage from '../previousPage.png'
import { Link } from 'react-router-dom'

const KnowledgeCheck = () => {
  return (
    <div className="KnowledgeCheck">
      <header className="KnowledgeCheck-header">
        <p>
          <h1>Lets test your Knowledge...</h1>
        </p>
        <p>
          <Link to={"/InsuranceType"}>
            <img src={previousPage} alt="InsuranceTypePage" />
          </Link>
          <Link to={"/Path"}>
            <img src={nextPage} alt="PathPage" />
          </Link>
        </p>
      </header>
    </div>
  )
}

export default KnowledgeCheck