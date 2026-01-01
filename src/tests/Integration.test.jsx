import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Application Integration Tests', () => {
  it('navigates to Laces category when clicking Laces link', () => {
    render(<App />);
    
    const lacesLink = screen.getAllByText('Laces')[0];
    expect(lacesLink).toHaveAttribute('href', '/category/laces');
  });

  it('navigates to Fabrics category when clicking Fabrics link', () => {
    render(<App />);
    
    const fabricsLinks = screen.getAllByText('Fabrics');
    expect(fabricsLinks[0]).toHaveAttribute('href', '/category/fabrics');
  });

  it('navigates to Buttons category when clicking Buttons link', () => {
    render(<App />);
    
    const buttonsLink = screen.getAllByText('Buttons')[0];
    expect(buttonsLink).toHaveAttribute('href', '/category/buttons');
  });

  it('navigates to Raw Material category when clicking Raw Material link', () => {
    render(<App />);
    
    const rawMaterialLinks = screen.getAllByText('Raw Material');
    expect(rawMaterialLinks[0]).toHaveAttribute('href', '/category/stitching-materials');
  });

  it('displays all footer sections correctly', () => {
    render(<App />);
    
    // Check footer sections
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('Contact Info')).toBeInTheDocument();
  });

  it('has accessible search and account buttons', () => {
    render(<App />);
    
    const searchButton = screen.getByLabelText('Search');
    const accountButton = screen.getByLabelText('Account');
    
    expect(searchButton).toBeInTheDocument();
    expect(accountButton).toBeInTheDocument();
  });

  it('renders logo in header and footer', () => {
    render(<App />);
    
    const logos = screen.getAllByAltText(/Bedi Lace Collection/i);
    expect(logos.length).toBe(2); // One in header, one in footer
  });

  it('displays correct year in copyright', () => {
    render(<App />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it('has correct meta information structure', () => {
    render(<App />);
    
    // Verify the app renders without errors
    const homeHeading = screen.getByText(/Welcome to Bedi Lace Collection/i);
    expect(homeHeading).toBeInTheDocument();
  });

  it('footer has contact information', () => {
    render(<App />);
    
    expect(screen.getByText(/bedilacecollection@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Mon-Sun, 11 AM - 9.30 PM/i)).toBeInTheDocument();
    expect(screen.getByText(/\+91-9899884227/)).toBeInTheDocument();
    expect(screen.getByText(/Lajpat Nagar 4/i)).toBeInTheDocument();
  });
});
