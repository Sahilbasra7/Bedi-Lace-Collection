import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    
    // App should render with router
    const app = document.querySelector('#root') || document.body;
    expect(app).toBeTruthy();
  });

  it('renders header in the app', () => {
    render(<App />);
    
    // Header logo should be present (there are two logos - header and footer)
    const logos = screen.getAllByAltText(/Bedi Lace Collection/i);
    expect(logos.length).toBeGreaterThan(0);
    expect(logos[0]).toBeInTheDocument();
  });

  it('renders footer in the app', () => {
    render(<App />);
    
    // Footer should be present
    const copyright = screen.getByText(/All rights reserved/i);
    expect(copyright).toBeInTheDocument();
  });

  it('renders home page by default', () => {
    render(<App />);
    
    // Home page content should be visible
    const welcomeHeading = screen.getByText(/Welcome to Bedi Lace Collection/i);
    expect(welcomeHeading).toBeInTheDocument();
  });

  it('has correct routing structure', () => {
    render(<App />);
    
    // Check if navigation links are present
    const homeLink = screen.getAllByText('Home')[0];
    expect(homeLink).toBeInTheDocument();
  });
});
