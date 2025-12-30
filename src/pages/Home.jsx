import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';
import { getFeaturedProducts } from '../data/products';
import './Home.css';

function Home() {
  const featuredProducts = getFeaturedProducts(6);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="hero-content">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Welcome to Bedi Lace Collection
            </motion.h1>
            <motion.p
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover premium quality laces, fabrics, buttons, and stitching materials
            </motion.p>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/category/laces" className="cta-button">
                Explore Our Collection
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="category-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={`/category/${category.slug}`}>
                  <div className="category-image-placeholder">
                    <span className="category-icon">📦</span>
                  </div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="product-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/product/${product.id}`}>
                  <div className="product-image-placeholder">
                    <span>🖼️</span>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>{product.description.substring(0, 80)}...</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="home-about">
        <div className="container">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>✨ Premium Quality</h3>
                <p>We offer only the finest quality products sourced from trusted suppliers.</p>
              </div>
              <div className="feature">
                <h3>🎨 Wide Variety</h3>
                <p>Extensive range of colors, patterns, and styles to suit every need.</p>
              </div>
              <div className="feature">
                <h3>🤝 Expert Guidance</h3>
                <p>Our knowledgeable team is here to help you find exactly what you need.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
