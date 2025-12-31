import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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
    
    // Navigation items now appear in both desktop and mobile menu
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Laces').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Fabrics').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Buttons').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Raw Material').length).toBeGreaterThan(0);
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
    
    // Get links from main nav (desktop)
    const homeLinks = screen.getAllByText('Home');
    const lacesLinks = screen.getAllByText('Laces');
    
    // Check first instance (desktop nav)
    expect(homeLinks[0].closest('a')).toHaveAttribute('href', '/');
    expect(lacesLinks[0].closest('a')).toHaveAttribute('href', '/category/laces');
  });

  it('renders hamburger menu button', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    const hamburgerButton = screen.getByLabelText('Toggle Menu');
    expect(hamburgerButton).toBeInTheDocument();
    expect(hamburgerButton.tagName).toBe('BUTTON');
  });

  it('mobile menu is hidden by default', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    const mobileMenu = document.querySelector('.mobile-menu');
    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).not.toHaveClass('open');
  });

  it('opens mobile menu when hamburger is clicked', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    const hamburgerButton = screen.getByLabelText('Toggle Menu');
    fireEvent.click(hamburgerButton);
    
    const mobileMenu = document.querySelector('.mobile-menu');
    expect(mobileMenu).toHaveClass('open');
  });

  it('closes mobile menu when close button is clicked', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    const hamburgerButton = screen.getByLabelText('Toggle Menu');
    fireEvent.click(hamburgerButton);
    
    const closeButton = screen.getByLabelText('Close Menu');
    fireEvent.click(closeButton);
    
    const mobileMenu = document.querySelector('.mobile-menu');
    expect(mobileMenu).not.toHaveClass('open');
  });

  it('renders menu heading in mobile menu', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    const menuHeading = screen.getByText('Menu');
    expect(menuHeading).toBeInTheDocument();
    expect(menuHeading.tagName).toBe('H2');
  });

  it('mobile menu includes About Us and Contact links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    const aboutLinks = screen.getAllByText('About Us');
    const contactLinks = screen.getAllByText('Contact');
    
    expect(aboutLinks.length).toBeGreaterThan(0);
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  it('mobile menu links have arrow indicators', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    const arrows = document.querySelectorAll('.nav-arrow');
    expect(arrows.length).toBe(7); // 7 navigation items with arrows
  });

  it('hamburger button has active class when menu is open', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    const hamburgerButton = screen.getByLabelText('Toggle Menu');
    expect(hamburgerButton).not.toHaveClass('active');
    
    fireEvent.click(hamburgerButton);
    expect(hamburgerButton).toHaveClass('active');
  });

  it('closes menu when overlay is clicked', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    const hamburgerButton = screen.getByLabelText('Toggle Menu');
    fireEvent.click(hamburgerButton);
    
    const overlay = document.querySelector('.menu-overlay');
    expect(overlay).toBeInTheDocument();
    
    fireEvent.click(overlay);
    const mobileMenu = document.querySelector('.mobile-menu');
    expect(mobileMenu).not.toHaveClass('open');
  });
});
