import { describe, it, expect } from 'vitest';
import { categories } from '../data/categories';
import { products, getProductsByCategory, getProductById, getFeaturedProducts } from '../data/products';

describe('Data Functions', () => {
  it('should have categories data', () => {
    expect(categories).toBeDefined();
    expect(categories.length).toBeGreaterThan(0);
  });

  it('should have products data', () => {
    expect(products).toBeDefined();
    expect(products.length).toBeGreaterThan(0);
  });

  it('should filter products by category', () => {
    const laceProducts = getProductsByCategory('laces');
    expect(laceProducts.length).toBeGreaterThan(0);
    expect(laceProducts.every(p => p.categoryId === 'laces')).toBe(true);
  });

  it('should get product by id', () => {
    const product = getProductById('lace-001');
    expect(product).toBeDefined();
    expect(product.id).toBe('lace-001');
  });

  it('should get featured products', () => {
    const featured = getFeaturedProducts(3);
    expect(featured.length).toBe(3);
  });
});
