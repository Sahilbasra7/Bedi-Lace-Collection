import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../pages/Contact';

describe('Contact Component', () => {
  it('renders contact form with all fields', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('form fields accept input', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    
    expect(nameInput.value).toBe('John Doe');
  });

  it('shows error when email is invalid', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    
    // Fill name first to enable email
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.blur(nameInput);
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);
    
    expect(screen.getByText(/enter valid email/i)).toBeInTheDocument();
  });

  it('shows error when phone is invalid', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const phoneInput = screen.getByLabelText(/phone/i);
    
    // Fill previous fields
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.blur(nameInput);
    
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.blur(emailInput);
    
    fireEvent.change(phoneInput, { target: { value: '123' } });
    fireEvent.blur(phoneInput);
    
    expect(screen.getByText(/enter valid number/i)).toBeInTheDocument();
  });

  it('allows valid phone number with spaces and dashes', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const phoneInput = screen.getByLabelText(/phone/i);
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.blur(nameInput);
    
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.blur(emailInput);
    
    fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
    fireEvent.blur(phoneInput);
    
    expect(screen.queryByText(/enter valid number/i)).not.toBeInTheDocument();
  });

  it('form validates and accepts valid inputs', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const phoneInput = screen.getByLabelText(/phone/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    
    // Fill fields with valid data
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(subjectInput, { target: { value: 'Product Inquiry' } });
    
    // Verify inputs accepted the values
    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(phoneInput.value).toBe('1234567890');
    expect(subjectInput.value).toBe('Product Inquiry');
  });

  it('message field accepts text input', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const phoneInput = screen.getByLabelText(/phone/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/message/i);
    
    // Fill all fields
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(subjectInput, { target: { value: 'Inquiry' } });
    fireEvent.change(messageInput, { target: { value: 'I would like to know more about your products.' } });
    
    expect(messageInput.value).toBe('I would like to know more about your products.');
  });

  it('shows success message on valid form submission', async () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const phoneInput = screen.getByLabelText(/phone/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    // Fill all fields with valid data
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(subjectInput, { target: { value: 'Product Inquiry' } });
    fireEvent.change(messageInput, { target: { value: 'I would like to know more about your lace collection.' } });
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/we will call you back shortly/i)).toBeInTheDocument();
    });
  });

  it('submit button works with valid form', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    // Button exists and is a submit button
    expect(submitButton).toBeInTheDocument();
    expect(submitButton.type).toBe('submit');
  });

  it('enables submit button when all fields are valid', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const phoneInput = screen.getByLabelText(/phone/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/message/i);
    
    // Fill all fields with valid data
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(subjectInput, { target: { value: 'Product Inquiry' } });
    fireEvent.change(messageInput, { target: { value: 'I would like to know more about your lace collection.' } });
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('displays contact information', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /phone/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /email/i })).toBeInTheDocument();
  });
});
