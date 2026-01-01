import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home Page Mobile Responsive Tests', () => {
  it('renders category grid with proper structure', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const categoryGrid = document.querySelector('.categories-grid');
    expect(categoryGrid).toBeInTheDocument();
  });

  it('renders products grid with proper structure', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const productsGrid = document.querySelector('.products-grid');
    expect(productsGrid).toBeInTheDocument();
  });

  it('category cards have image placeholders', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const categoryImages = document.querySelectorAll('.category-image, .category-image-placeholder');
    expect(categoryImages.length).toBeGreaterThan(0);
  });

  it('product cards have image placeholders', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const productImages = document.querySelectorAll('.product-image, .product-image-placeholder');
    expect(productImages.length).toBeGreaterThan(0);
  });

  it('features grid renders properly', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const featuresGrid = document.querySelector('.features-grid');
    expect(featuresGrid).toBeInTheDocument();
  });

  it('hero section has CTA button', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const ctaButton = document.querySelector('.cta-button');
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/category/laces');
  });

  it('all sections have proper headings', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const categoriesSection = document.querySelector('.categories-section');
    const featuredSection = document.querySelector('.featured-section');
    const homeAbout = document.querySelector('.home-about');
    
    expect(categoriesSection).toBeInTheDocument();
    expect(featuredSection).toBeInTheDocument();
    expect(homeAbout).toBeInTheDocument();
  });
});
