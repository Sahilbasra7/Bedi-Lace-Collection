import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Signup from '../pages/Signup';

describe('Signup Component', () => {
  it('renders signup page with all elements', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Create Account')).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^sign up$/i })).toBeInTheDocument();
  });

  it('has link to login page', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    
    const loginLink = screen.getByText(/login/i);
    expect(loginLink.closest('a')).toHaveAttribute('href', '/login');
  });

  it('has gmail signup button', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    
    const gmailButton = screen.getByRole('button', { name: /sign up with gmail/i });
    expect(gmailButton).toBeInTheDocument();
  });

  it('name input accepts user input', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    
    const nameInput = screen.getByLabelText(/full name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    
    expect(nameInput.value).toBe('John Doe');
  });

  it('email input accepts user input', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    
    expect(emailInput.value).toBe('john@example.com');
  });

  it('password input accepts user input', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    
    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(passwordInput, { target: { value: 'securepass123' } });
    
    expect(passwordInput.value).toBe('securepass123');
  });

  it('form submit logs data to console', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    
    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /^sign up$/i });
    
    fireEvent.change(nameInput, { target: { value: 'Jane Smith' } });
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'mypassword' } });
    fireEvent.click(submitButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Signup Form Data:', {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'mypassword'
    });
    
    consoleSpy.mockRestore();
  });

  it('gmail button logs to console when clicked', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    
    const gmailButton = screen.getByRole('button', { name: /sign up with gmail/i });
    fireEvent.click(gmailButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Gmail signup clicked (UI only)');
    
    consoleSpy.mockRestore();
  });

  it('form inputs are required', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    
    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    
    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(passwordInput).toBeRequired();
  });

  it('email input has correct type', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('password input has correct type', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    
    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('displays divider text', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    
    expect(screen.getByText('or')).toBeInTheDocument();
  });
});
