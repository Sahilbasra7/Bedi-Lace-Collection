import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/bedi Lace Collection Logo.png';
import { products } from '../data/products';
import { categories } from '../data/categories';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = [];

    // Search through categories
    const categoryMatches = categories.filter(category => 
      category.name.toLowerCase().includes(query.toLowerCase()) ||
      category.description.toLowerCase().includes(query.toLowerCase())
    );

    categoryMatches.forEach(category => {
      results.push({
        id: category.id,
        name: category.name,
        type: 'category',
        description: category.description,
        slug: category.slug
      });
    });

    // Search through products
    const productMatches = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.categoryId.toLowerCase().includes(query.toLowerCase())
    );

    productMatches.forEach(product => {
      results.push({
        id: product.id,
        name: product.name,
        type: 'product',
        categoryId: product.categoryId
      });
    });

    setSearchResults(results.slice(0, 6)); // Limit to 6 results
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && searchResults.length > 0) {
      handleResultClick(searchResults[0]);
    }
  };

  const handleResultClick = (result) => {
    if (result.type === 'category') {
      navigate(`/category/${result.slug}`);
    } else {
      navigate(`/product/${result.id}`);
    }
    setSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        {/* Mobile Hamburger Menu Button */}
        <button className={`hamburger-button ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

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
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
        </div>
        
        {/* Right Side - Search and Account */}
        <div className="header-right">
          {/* Search Bar */}
          <div className={`search-container ${searchOpen ? 'active' : ''}`}>
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                className="search-input"
                placeholder="Search products & categories..."
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus={searchOpen}
              />
              {searchOpen && (
                <button 
                  type="button" 
                  className="search-close-button" 
                  onClick={toggleSearch}
                  aria-label="Close search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
              {searchResults.length > 0 && (
                <div className="search-results">
                  {searchResults.map(result => (
                    <div
                      key={result.id}
                      className="search-result-item"
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="result-info">
                        <span className="result-name">{result.name}</span>
                        <span className="result-category">
                          {result.type === 'category' ? 'Category' : result.categoryId}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </form>
          </div>

          <button className="icon-button" onClick={toggleSearch} aria-label="Search">
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

      {/* Mobile Slide Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <button className="close-button" onClick={closeMenu} aria-label="Close Menu">
            ×
          </button>
          <h2>Menu</h2>
        </div>
        <nav className="mobile-nav">
          <Link to="/" className="mobile-nav-link" onClick={closeMenu}>
            <span>Home</span>
            <span className="nav-arrow">›</span>
          </Link>
          <Link to="/category/laces" className="mobile-nav-link" onClick={closeMenu}>
            <span>Laces</span>
            <span className="nav-arrow">›</span>
          </Link>
          <Link to="/category/fabrics" className="mobile-nav-link" onClick={closeMenu}>
            <span>Fabrics</span>
            <span className="nav-arrow">›</span>
          </Link>
          <Link to="/category/buttons" className="mobile-nav-link" onClick={closeMenu}>
            <span>Buttons</span>
            <span className="nav-arrow">›</span>
          </Link>
          <Link to="/category/stitching-materials" className="mobile-nav-link" onClick={closeMenu}>
            <span>Raw Material</span>
            <span className="nav-arrow">›</span>
          </Link>
          <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>
            <span>About Us</span>
            <span className="nav-arrow">›</span>
          </Link>
          <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>
            <span>Contact</span>
            <span className="nav-arrow">›</span>
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
}

export default Header;
