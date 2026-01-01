import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';

describe('Layout Component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    
    // Layout should contain header and footer
    const layout = document.querySelector('.app-layout');
    expect(layout).toBeTruthy();
  });

  it('renders header component', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    
    // Header should be present with logo (there are two logos - header and footer)
    const logos = screen.getAllByAltText(/Bedi Lace Collection/i);
    expect(logos.length).toBeGreaterThan(0);
    expect(logos[0]).toBeInTheDocument();
  });

  it('renders whatsapp button', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    
    const whatsappButton = screen.getByRole('link', { name: /chat on whatsapp/i });
    expect(whatsappButton).toBeInTheDocument();
  });

  it('renders footer component', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    
    // Footer should contain copyright text
    const copyright = screen.getByText(/All rights reserved/i);
    expect(copyright).toBeInTheDocument();
  });

  it('renders main content area', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    
    const main = document.querySelector('main');
    expect(main).toBeInTheDocument();
  });
});
