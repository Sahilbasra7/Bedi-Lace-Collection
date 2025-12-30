import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../layouts/Footer';

describe('Footer Component', () => {
  it('renders the footer logo', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
    const logo = screen.getByAltText(/Bedi Lace Collection/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
    const tagline = screen.getByText(/Your premier destination for high-quality laces/i);
    expect(tagline).toBeInTheDocument();
  });

  it('renders Quick Links section', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders Categories section with all categories', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('Laces')).toBeInTheDocument();
    expect(screen.getByText('Ladies Inline Fabrics')).toBeInTheDocument();
    expect(screen.getByText('Buttons')).toBeInTheDocument();
    expect(screen.getByText('Stitching Raw Materials')).toBeInTheDocument();
  });

  it('renders Contact Info section', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Contact Info')).toBeInTheDocument();
    expect(screen.getByText(/Address:/)).toBeInTheDocument();
    expect(screen.getByText(/Phone:/)).toBeInTheDocument();
    expect(screen.getByText(/Email:/)).toBeInTheDocument();
    expect(screen.getByText(/Hours:/)).toBeInTheDocument();
  });

  it('renders copyright text with current year', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(new RegExp(`${currentYear} Bedi Lace Collection`));
    expect(copyright).toBeInTheDocument();
  });
});
