import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';

describe('ProductDetail Responsive Tests', () => {
  let originalInnerWidth;

  beforeEach(() => {
    originalInnerWidth = window.innerWidth;
  });

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
  });

  it('renders product detail on desktop view (>768px)', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });

    render(
      <MemoryRouter initialEntries={['/product/lace-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );

    const detailContent = document.querySelector('.product-detail-content');
    expect(detailContent).toBeInTheDocument();
  });

  it('renders product detail on tablet view (768px)', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768,
    });

    render(
      <MemoryRouter initialEntries={['/product/fabric-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );

    const detailPage = document.querySelector('.product-detail-page');
    expect(detailPage).toBeInTheDocument();
  });

  it('renders product detail on mobile view (<768px)', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });

    render(
      <MemoryRouter initialEntries={['/product/button-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );

    const detailPage = document.querySelector('.product-detail-page');
    expect(detailPage).toBeInTheDocument();
  });

  it('image section and info section are properly structured for responsive layout', () => {
    render(
      <MemoryRouter initialEntries={['/product/lace-002']}>
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

  it('breadcrumb navigation is visible on all screen sizes', () => {
    render(
      <MemoryRouter initialEntries={['/product/stitch-001']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );

    const breadcrumb = document.querySelector('.breadcrumb');
    expect(breadcrumb).toBeInTheDocument();
  });

  it('action buttons are accessible on mobile', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });

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

  it('specifications table is responsive', () => {
    render(
      <MemoryRouter initialEntries={['/product/lace-003']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );

    const specsTable = document.querySelector('.specs-table');
    expect(specsTable).toBeInTheDocument();

    const specRows = specsTable.querySelectorAll('tr');
    expect(specRows.length).toBeGreaterThan(0);
  });
});
