import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductById } from '../data/products';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="container">
        <div className="error-message">
          <h2>Product not found</h2>
          <Link to="/">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <motion.div 
          className="breadcrumb"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to={`/category/${product.category}`}>
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <span> / </span>
          <span>{product.name}</span>
        </motion.div>

        <div className="product-detail-content">
          <motion.div 
            className="product-image-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="main-image-placeholder">
              <span>🖼️</span>
              <p>Product Image</p>
            </div>
            {product.images && product.images.length > 1 && (
              <div className="thumbnail-gallery">
                {product.images.map((img, index) => (
                  <div key={index} className="thumbnail-placeholder">
                    <span>📷</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div 
            className="product-info-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>{product.name}</h1>
            <p className="product-description">{product.description}</p>

            <div className="specifications">
              <h3>Specifications</h3>
              <table className="specs-table">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key}>
                      <td className="spec-label">{key}:</td>
                      <td className="spec-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="action-buttons">
              <button className="contact-button">Contact for Inquiry</button>
              <Link to={`/category/${product.category}`} className="back-button">
                View More in Category
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
