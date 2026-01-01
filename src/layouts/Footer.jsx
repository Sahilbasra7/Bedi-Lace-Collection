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
            <h3>Categories</h3>
            <ul>
              {categories.map(category => (
                <li key={category.id}>
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section quick-links-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-label">📍 Address:</span>
                <span className="contact-value">C1 Shop. - 6, Amar Colony, near Raghunath Mandir Lane, Main Market, Amar colony, Lajpat Nagar 4, New Delhi, Delhi 110024</span>
              </li>
              <li className="contact-item">
                <span className="contact-label">📞 Phone:</span>
                <a href="tel:+919899884227" className="phone-link contact-value">+91-9899884227</a>
              </li>
              <li className="contact-item">
                <span className="contact-label">✉️ Email:</span>
                <a href="mailto:bedilacecollection@gmail.com" className="email-link contact-value">bedilacecollection@gmail.com</a>
              </li>
              <li className="contact-item">
                <span className="contact-label">🕐 Hours:</span>
                <span className="contact-value">Mon-Sun, 11 AM - 9.30 PM</span>
              </li>
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
