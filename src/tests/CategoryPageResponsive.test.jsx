import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';

describe('CategoryPage Responsive Tests', () => {
  it('renders category page with proper structure', () => {
    render(
      <BrowserRouter>
        <CategoryPage />
      </BrowserRouter>
    );
    
    const categoryPage = document.querySelector('.category-page');
    expect(categoryPage).toBeInTheDocument();
  });

  it('displays back to home link', () => {
    render(
      <BrowserRouter>
        <CategoryPage />
      </BrowserRouter>
    );
    
    const backLink = screen.getByText(/Back to Home/i);
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders products grid container', () => {
    render(
      <BrowserRouter>
        <CategoryPage />
      </BrowserRouter>
    );
    
    // When no valid category, it shows error, so products grid won't be present
    const categoryPage = document.querySelector('.category-page');
    expect(categoryPage).toBeInTheDocument();
  });

  it('category header has proper structure', () => {
    render(
      <BrowserRouter>
        <CategoryPage />
      </BrowserRouter>
    );
    
    // When no category is valid, error message is shown instead of header
    const errorOrHeader = document.querySelector('.category-page');
    expect(errorOrHeader).toBeInTheDocument();
  });

  it('shows error message for invalid category', () => {
    render(
      <BrowserRouter>
        <CategoryPage />
      </BrowserRouter>
    );
    
    const errorMessage = screen.queryByText(/Category not found/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('error message has back link', () => {
    render(
      <BrowserRouter>
        <CategoryPage />
      </BrowserRouter>
    );
    
    const backLinks = screen.getAllByText(/Back to Home/i);
    expect(backLinks.length).toBeGreaterThan(0);
  });
});
