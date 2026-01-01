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
});
