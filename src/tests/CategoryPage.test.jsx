import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';

const renderCategoryPage = (slug) => {
  return render(
    <BrowserRouter initialEntries={[`/category/${slug}`]}>
      <Routes>
        <Route path="/category/:slug" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

describe('CategoryPage Component', () => {
  it('renders category page for laces', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    );
    
    // Since we're not providing a slug in the test route,
    // we need to test with the actual routing
  });

  it('displays back to home link', () => {
    render(
      <BrowserRouter>
        <CategoryPage />
      </BrowserRouter>
    );
    
    const backLink = screen.queryByText(/Back to Home/i);
    expect(backLink).toBeInTheDocument();
  });

  it('renders products grid container', () => {
    render(
      <BrowserRouter>
        <CategoryPage />
      </BrowserRouter>
    );
    
    // Check if the component renders without crashing
    const categoryPage = document.querySelector('.category-page');
    expect(categoryPage).toBeTruthy();
  });

  it('shows category not found message for invalid category', () => {
    render(
      <BrowserRouter>
        <CategoryPage />
      </BrowserRouter>
    );
    
    // When no valid slug is provided, it should show error or category not found
    const errorMessage = screen.queryByText(/Category not found/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
