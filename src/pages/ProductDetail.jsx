import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductById } from '../data/products';
import { categories } from '../data/categories';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <div className="error-message">
            <h2>Product not found</h2>
            <Link to="/" className="back-link">← Return to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  const category = categories.find(cat => cat.id === product.categoryId);
  const categoryName = category ? category.name : product.categoryId;

  const handleContactClick = () => {
    const message = `Hi, I'm interested in ${product.name}`;
    const whatsappUrl = `https://wa.me/919899884227?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
          <Link to={`/category/${product.categoryId}`}>
            {categoryName}
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
            <div className="main-image">
              <img 
                src={product.images[0]} 
                alt={product.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="image-placeholder"><span>🖼️</span><p>Product Image</p></div>';
                }}
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="thumbnail-gallery">
                {product.images.map((img, index) => (
                  <div key={index} className="thumbnail">
                    <img 
                      src={img} 
                      alt={`${product.name} ${index + 1}`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<span>📷</span>';
                      }}
                    />
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
                      <td className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</td>
                      <td className="spec-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="action-buttons">
              <button className="contact-button" onClick={handleContactClick}>
                <span>💬</span> Contact for Inquiry
              </button>
              <Link to={`/category/${product.categoryId}`} className="back-button">
                ← View More in Category
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
