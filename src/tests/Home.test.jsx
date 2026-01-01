import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home Page', () => {
  it('renders welcome heading', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const heading = screen.getByText(/Welcome to Bedi Lace Collection/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders categories section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const categoriesHeading = screen.getByText(/Shop by Category/i);
    expect(categoriesHeading).toBeInTheDocument();
  });

  it('renders featured products section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const featuredHeading = screen.getByText(/Featured Products/i);
    expect(featuredHeading).toBeInTheDocument();
  });

  it('renders category images', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const categoryImages = document.querySelectorAll('.category-image img');
    expect(categoryImages.length).toBeGreaterThan(0);
    
    // Check that images have correct attributes
    categoryImages.forEach(img => {
      expect(img).toHaveAttribute('src');
      expect(img).toHaveAttribute('alt');
    });
  });

  it('renders product images in featured section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const productImages = document.querySelectorAll('.product-image img');
    expect(productImages.length).toBeGreaterThan(0);
    
    // Check that images have correct attributes
    productImages.forEach(img => {
      expect(img).toHaveAttribute('src');
      expect(img).toHaveAttribute('alt');
    });
  });

  it('category cards link to correct category pages', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const categoryCards = document.querySelectorAll('.category-card a');
    expect(categoryCards.length).toBe(4);
    
    // Check first category (Laces)
    expect(categoryCards[0]).toHaveAttribute('href', '/category/laces');
  });

  it('featured product cards link to product detail pages', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const productCards = document.querySelectorAll('.product-card a');
    expect(productCards.length).toBe(6); // Featured products limit is 6
    
    // Check that links follow the pattern /product/:id
    productCards.forEach(card => {
      const href = card.getAttribute('href');
      expect(href).toMatch(/^\/product\//);
    });
  });
});
