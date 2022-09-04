import '../styles/InsuranceType.css'
import nextPage from '../nextPage.png'
import previousPage from '../previousPage.png'
import { Link } from 'react-router-dom'

const InsuranceType = () => {
  return (
    <div className="InsuranceType">
      <header className="InsuranceType-header">
        <p>
          <h1>Types of Insurance?</h1>
        </p>
        <p>
          <Link to={"/Insurance"}>
            <img src={previousPage} alt="InsurancePage" />
          </Link>
          <Link to={"/KnowledgeCheck"}>
            <img src={nextPage} alt="KnowledgeCheckPage" />
          </Link>
        </p>
      </header>
    </div>
  )
}

export default InsuranceType