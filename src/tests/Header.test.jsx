import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../layouts/Header';

describe('Header Component', () => {
  it('renders the logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    const logo = screen.getByAltText(/Bedi Lace Collection/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Laces')).toBeInTheDocument();
    expect(screen.getByText('Fabrics')).toBeInTheDocument();
    expect(screen.getByText('Buttons')).toBeInTheDocument();
    expect(screen.getByText('Raw Material')).toBeInTheDocument();
  });

  it('renders search and account buttons', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    const searchButton = screen.getByLabelText('Search');
    const accountButton = screen.getByLabelText('Account');
    
    expect(searchButton).toBeInTheDocument();
    expect(accountButton).toBeInTheDocument();
  });

  it('navigation links have correct href attributes', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    const homeLink = screen.getByText('Home').closest('a');
    const lacesLink = screen.getByText('Laces').closest('a');
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(lacesLink).toHaveAttribute('href', '/category/laces');
  });
});
