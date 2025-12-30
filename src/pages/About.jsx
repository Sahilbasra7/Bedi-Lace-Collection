import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Bedi Lace Collection
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Your trusted partner for premium quality fashion materials
          </motion.p>
        </div>
      </motion.section>

      <section className="about-content">
        <div className="container">
          <motion.div 
            className="about-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Story</h2>
            <p>
              Bedi Lace Collection has been serving the fashion and textile industry for years, 
              providing high-quality laces, fabrics, buttons, and stitching materials. Our journey 
              began with a simple mission: to offer the finest quality products that help bring 
              creative visions to life.
            </p>
            <p>
              Today, we are proud to be a trusted name in the industry, known for our extensive 
              collection, quality assurance, and commitment to customer satisfaction.
            </p>
          </motion.div>

          <motion.div 
            className="about-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Our Mission</h2>
            <p>
              To provide designers, tailors, and fashion enthusiasts with the highest quality 
              materials and exceptional service, helping them create beautiful and lasting designs.
            </p>
          </motion.div>

          <motion.div 
            className="values-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">✨</div>
                <h3>Quality First</h3>
                <p>We never compromise on quality. Every product is carefully selected and inspected.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Customer Focus</h3>
                <p>Your satisfaction is our priority. We go above and beyond to meet your needs.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🎨</div>
                <h3>Innovation</h3>
                <p>We stay updated with the latest trends and bring you the most fashionable options.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">💎</div>
                <h3>Integrity</h3>
                <p>Honest business practices and transparent dealings are at our core.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Why Choose Us?</h2>
            <ul className="benefits-list">
              <li>✓ Extensive collection across multiple categories</li>
              <li>✓ Premium quality guaranteed</li>
              <li>✓ Competitive and transparent approach</li>
              <li>✓ Expert guidance and recommendations</li>
              <li>✓ Trusted by professionals and enthusiasts</li>
              <li>✓ Regular updates with latest trends</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
