import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WhatsAppButton from '../components/WhatsAppButton';

describe('WhatsAppButton Component', () => {
  it('renders whatsapp button', () => {
    render(<WhatsAppButton />);
    
    const button = screen.getByRole('link', { name: /chat on whatsapp/i });
    expect(button).toBeInTheDocument();
  });

  it('has correct whatsapp link with phone number', () => {
    render(<WhatsAppButton />);
    
    const button = screen.getByRole('link', { name: /chat on whatsapp/i });
    expect(button).toHaveAttribute('href');
    expect(button.getAttribute('href')).toContain('wa.me/919899884227');
  });

  it('has pre-filled message in whatsapp link', () => {
    render(<WhatsAppButton />);
    
    const button = screen.getByRole('link', { name: /chat on whatsapp/i });
    const href = button.getAttribute('href');
    expect(href).toContain('text=');
    expect(href).toContain('interested');
  });

  it('opens in new tab', () => {
    render(<WhatsAppButton />);
    
    const button = screen.getByRole('link', { name: /chat on whatsapp/i });
    expect(button).toHaveAttribute('target', '_blank');
    expect(button).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has whatsapp-button class for styling', () => {
    const { container } = render(<WhatsAppButton />);
    
    const button = container.querySelector('.whatsapp-button');
    expect(button).toBeInTheDocument();
  });

  it('renders svg icon', () => {
    const { container } = render(<WhatsAppButton />);
    
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
