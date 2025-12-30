import { useParams, Link } from 'react-router-dom';
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
      <div className="category-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>{category.name}</h1>
        <p className="category-description">{category.description}</p>
      </div>

      <div className="products-grid">
        {categoryProducts.length === 0 ? (
          <p className="no-products">No products available in this category yet.</p>
        ) : (
          categoryProducts.map(product => (
            <Link 
              key={product.id} 
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
          ))
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
