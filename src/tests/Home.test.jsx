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
});
