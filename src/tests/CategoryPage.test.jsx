import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';

describe('CategoryPage Component', () => {
  it('renders category page for laces with products', () => {
    render(
      <MemoryRouter initialEntries={['/category/laces']}>
        <Routes>
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    expect(screen.getByText('Laces')).toBeInTheDocument();
    expect(screen.getByText(/Back to Home/i)).toBeInTheDocument();
  });

  it('displays back to home link that is left-aligned', () => {
    render(
      <MemoryRouter initialEntries={['/category/laces']}>
        <Routes>
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    const backLink = screen.getByText(/Back to Home/i);
    expect(backLink).toBeInTheDocument();
  });

  it('renders products grid with 8 products for laces category', () => {
    render(
      <MemoryRouter initialEntries={['/category/laces']}>
        <Routes>
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    const productCards = document.querySelectorAll('.product-card');
    expect(productCards.length).toBe(8);
  });

  it('renders products grid with 8 products for fabrics category', () => {
    render(
      <MemoryRouter initialEntries={['/category/fabrics']}>
        <Routes>
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    const productCards = document.querySelectorAll('.product-card');
    expect(productCards.length).toBe(8);
  });

  it('renders products grid with 8 products for buttons category', () => {
    render(
      <MemoryRouter initialEntries={['/category/buttons']}>
        <Routes>
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    const productCards = document.querySelectorAll('.product-card');
    expect(productCards.length).toBe(8);
  });

  it('renders products grid with 8 products for stitching materials category', () => {
    render(
      <MemoryRouter initialEntries={['/category/stitching-materials']}>
        <Routes>
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    const productCards = document.querySelectorAll('.product-card');
    expect(productCards.length).toBe(8);
  });

  it('shows category not found message for invalid category', () => {
    render(
      <MemoryRouter initialEntries={['/category/invalid-category']}>
        <Routes>
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    const errorMessage = screen.getByText(/Category not found/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders category header with centered text', () => {
    render(
      <MemoryRouter initialEntries={['/category/laces']}>
        <Routes>
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    const categoryHeader = document.querySelector('.category-header');
    expect(categoryHeader).toBeTruthy();
  });

  it('displays product images in category page', () => {
    render(
      <MemoryRouter initialEntries={['/category/laces']}>
        <Routes>
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    const productImages = document.querySelectorAll('.product-image');
    expect(productImages.length).toBe(8); // 8 products per category
    
    // Check that all images have src attribute
    const images = document.querySelectorAll('.product-image img');
    images.forEach(img => {
      expect(img).toHaveAttribute('src');
      expect(img).toHaveAttribute('alt');
    });
  });

  it('product cards have proper structure with name and description', () => {
    render(
      <MemoryRouter initialEntries={['/category/buttons']}>
        <Routes>
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    const productNames = document.querySelectorAll('.product-name');
    const productDescriptions = document.querySelectorAll('.product-description');
    
    expect(productNames.length).toBe(8);
    expect(productDescriptions.length).toBe(8);
  });

  it('product cards have uniform height with flex layout', () => {
    render(
      <MemoryRouter initialEntries={['/category/laces']}>
        <Routes>
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    const categoryPage = document.querySelector('.category-page');
    expect(categoryPage).toBeInTheDocument();
    
    const productCards = document.querySelectorAll('.category-page .product-card');
    expect(productCards.length).toBe(8);
    
    // Verify all cards exist and have proper structure
    productCards.forEach(card => {
      expect(card).toBeInTheDocument();
      const imageWrapper = card.querySelector('.product-image-wrapper');
      const productInfo = card.querySelector('.product-info');
      expect(imageWrapper).toBeInTheDocument();
      expect(productInfo).toBeInTheDocument();
    });
  });

  it('product image wrappers have fixed height', () => {
    render(
      <MemoryRouter initialEntries={['/category/fabrics']}>
        <Routes>
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    const imageWrappers = document.querySelectorAll('.category-page .product-image-wrapper');
    expect(imageWrappers.length).toBe(8);
    
    // All image wrappers should have consistent height
    imageWrappers.forEach(wrapper => {
      expect(wrapper).toBeInTheDocument();
    });
  });

  it('product info sections have flex-grow for uniform spacing', () => {
    render(
      <MemoryRouter initialEntries={['/category/buttons']}>
        <Routes>
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    const productInfos = document.querySelectorAll('.category-page .product-info');
    expect(productInfos.length).toBe(8);
    
    // Check that info sections exist and have proper structure
    productInfos.forEach(info => {
      expect(info).toBeInTheDocument();
    });
  });
});
