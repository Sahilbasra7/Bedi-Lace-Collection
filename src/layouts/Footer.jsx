import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import logo from '../assets/bedi Lace Collection Logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-logo-section">
            <Link to="/">
              <img src={logo} alt="Bedi Lace Collection" className="footer-logo" />
            </Link>
            <p className="footer-tagline">Your premier destination for high-quality laces, fabrics, buttons, and stitching materials.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              {categories.map(category => (
                <li key={category.id}>
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-list">
              <li>📍 Address: [Your Address]</li>
              <li>📞 Phone: +91-XXXXX-XXXXX</li>
              <li>✉️ Email: info@bedilace.com</li>
              <li>🕐 Hours: Mon-Sat, 10 AM - 7 PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bedi Lace Collection. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
