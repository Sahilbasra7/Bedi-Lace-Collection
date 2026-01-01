import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';
import { products } from '../data/products';
import './CategoryPage.css';

function CategoryPage() {
  const { slug } = useParams();
  
  // Find the category
  const category = categories.find(cat => cat.id === slug);
  
  // Filter products by category
  const categoryProducts = products.filter(product => product.categoryId === slug);
  
  if (!category) {
    return (
      <div className="category-page">
        <div className="error-message">
          <h2>Category not found</h2>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="category-page">
      <motion.div 
        className="category-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="back-link">← Back to Home</Link>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {category.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {category.description}
        </motion.p>
      </motion.div>

      <div className="products-grid">
        {categoryProducts.length === 0 ? (
          <p className="no-products">No products available in this category yet.</p>
        ) : (
          categoryProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <Link 
                to={`/product/${product.id}`} 
                className="product-card"
              >
                <div className="product-image-wrapper">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="product-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('placeholder');
                    }}
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  {product.colors && product.colors.length > 0 && (
                    <div className="product-colors">
                      <span className="colors-label">Available in {product.colors.length} colors</span>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
