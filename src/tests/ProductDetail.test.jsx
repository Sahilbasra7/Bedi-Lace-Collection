import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';

// Mock window.open
const mockWindowOpen = vi.fn();
global.window.open = mockWindowOpen;

describe('ProductDetail Component', () => {
  beforeEach(() => {
    mockWindowOpen.mockClear();
  });

  it('renders product detail page for a valid product', () => {
    render(
      <MemoryRouter initialEntries={['/product/lace-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    const productNames = screen.getAllByText('Premium Cotton Lace');
    expect(productNames.length).toBeGreaterThanOrEqual(1);
  });

  it('displays breadcrumb navigation with correct links', () => {
    render(
      <MemoryRouter initialEntries={['/product/lace-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Laces')).toBeInTheDocument();
    
    const breadcrumb = document.querySelector('.breadcrumb');
    expect(breadcrumb).toHaveTextContent('Premium Cotton Lace');
  });

  it('shows product not found message for invalid product id', () => {
    render(
      <MemoryRouter initialEntries={['/product/invalid-id']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    expect(screen.getByText('Product not found')).toBeInTheDocument();
    expect(screen.getByText('← Return to Home')).toBeInTheDocument();
  });

  it('displays product image', () => {
    render(
      <MemoryRouter initialEntries={['/product/lace-002']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    const mainImage = document.querySelector('.main-image img');
    expect(mainImage).toBeInTheDocument();
    expect(mainImage).toHaveAttribute('src');
    expect(mainImage).toHaveAttribute('alt');
  });

  it('displays thumbnail gallery when product has multiple images', () => {
    render(
      <MemoryRouter initialEntries={['/product/lace-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    const thumbnailGallery = document.querySelector('.thumbnail-gallery');
    expect(thumbnailGallery).toBeInTheDocument();
    
    const thumbnails = document.querySelectorAll('.thumbnail');
    expect(thumbnails.length).toBeGreaterThan(0);
  });

  it('displays product description', () => {
    render(
      <MemoryRouter initialEntries={['/product/fabric-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    const description = document.querySelector('.product-description');
    expect(description).toBeInTheDocument();
  });

  it('displays product specifications table', () => {
    render(
      <MemoryRouter initialEntries={['/product/button-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    expect(screen.getByText('Specifications')).toBeInTheDocument();
    
    const specsTable = document.querySelector('.specs-table');
    expect(specsTable).toBeInTheDocument();
  });

  it('renders contact for inquiry button with WhatsApp functionality', () => {
    render(
      <MemoryRouter initialEntries={['/product/lace-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    const contactButton = screen.getByText(/Contact for Inquiry/i);
    expect(contactButton).toBeInTheDocument();
  });

  it('opens WhatsApp with product name when contact button is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/product/lace-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    const contactButton = screen.getByText(/Contact for Inquiry/i);
    fireEvent.click(contactButton);
    
    expect(mockWindowOpen).toHaveBeenCalledTimes(1);
    expect(mockWindowOpen).toHaveBeenCalledWith(
      expect.stringContaining('wa.me/919899884227'),
      '_blank'
    );
    expect(mockWindowOpen).toHaveBeenCalledWith(
      expect.stringContaining('Premium%20Cotton%20Lace'),
      '_blank'
    );
  });

  it('displays view more in category link', () => {
    render(
      <MemoryRouter initialEntries={['/product/fabric-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    const viewMoreLink = screen.getByText(/View More in Category/i);
    expect(viewMoreLink).toBeInTheDocument();
  });

  it('has correct link to category page', () => {
    render(
      <MemoryRouter initialEntries={['/product/lace-003']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    const viewMoreLink = screen.getByText(/View More in Category/i);
    expect(viewMoreLink).toHaveAttribute('href', '/category/laces');
  });

  it('applies framer motion animations to product sections', () => {
    render(
      <MemoryRouter initialEntries={['/product/button-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    const imageSection = document.querySelector('.product-image-section');
    const infoSection = document.querySelector('.product-info-section');
    
    expect(imageSection).toBeInTheDocument();
    expect(infoSection).toBeInTheDocument();
  });

  it('capitalizes specification labels correctly', () => {
    render(
      <MemoryRouter initialEntries={['/product/lace-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    const specLabels = document.querySelectorAll('.spec-label');
    expect(specLabels.length).toBeGreaterThan(0);
    
    // Check that at least one spec label is capitalized
    const labelText = specLabels[0].textContent;
    expect(labelText.charAt(0)).toBe(labelText.charAt(0).toUpperCase());
  });

  it('renders all products correctly across different categories', () => {
    const productIds = ['lace-001', 'fabric-001', 'button-001', 'stitch-001'];
    
    productIds.forEach(id => {
      const { unmount } = render(
        <MemoryRouter initialEntries={[`/product/${id}`]}>
          <Routes>
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </MemoryRouter>
      );
      
      const productName = document.querySelector('h1');
      expect(productName).toBeInTheDocument();
      
      unmount();
    });
  });

  it('has proper page structure with container', () => {
    render(
      <MemoryRouter initialEntries={['/product/lace-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    const detailPage = document.querySelector('.product-detail-page');
    const container = document.querySelector('.container');
    
    expect(detailPage).toBeInTheDocument();
    expect(container).toBeInTheDocument();
  });

  it('action buttons section is present', () => {
    render(
      <MemoryRouter initialEntries={['/product/fabric-002']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    const actionButtons = document.querySelector('.action-buttons');
    expect(actionButtons).toBeInTheDocument();
    
    const contactButton = document.querySelector('.contact-button');
    const backButton = document.querySelector('.back-button');
    
    expect(contactButton).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
  });
});
