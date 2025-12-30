import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/bedi Lace Collection Logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left Side - Logo and Navigation */}
        <div className="header-left">
          <Link to="/" className="logo-section">
            <img src={logo} alt="Bedi Lace Collection" className="logo-image" />
            <span className="logo-text">Bedi Lace Collection</span>
          </Link>
          
          <nav className="main-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/category/laces" className="nav-link">Laces</Link>
            <Link to="/category/fabrics" className="nav-link">Fabrics</Link>
            <Link to="/category/buttons" className="nav-link">Buttons</Link>
            <Link to="/category/stitching-materials" className="nav-link">Raw Material</Link>
          </nav>
        </div>
        
        {/* Right Side - Search and Account */}
        <div className="header-right">
          <button className="icon-button" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
          
          <button className="icon-button" aria-label="Account">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
