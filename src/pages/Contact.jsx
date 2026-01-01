import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false
  });

  const [errors, setErrors] = useState({});

  const fieldOrder = ['name', 'email', 'phone', 'subject', 'message'];

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value || value.trim() === '') return 'Enter Valid Name';
        return '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || value.trim() === '') return 'Enter Valid Email';
        if (!emailRegex.test(value)) return 'Enter Valid Email';
        return '';
      case 'phone':
        if (!value || value.trim() === '') return 'Enter Valid Number';
        const phoneRegex = /^[0-9]{10}$/;
        const cleanPhone = value.replace(/[-\s]/g, '');
        if (!phoneRegex.test(cleanPhone)) {
          return 'Enter Valid Number';
        }
        return '';
      case 'subject':
        if (!value || value.trim() === '') return 'Enter Valid Subject';
        return '';
      case 'message':
        if (!value || value.trim() === '') return 'Enter Valid Message';
        return '';
      default:
        return '';
    }
  };

  const handleFocus = (fieldName) => {
    const currentFieldIndex = fieldOrder.indexOf(fieldName);
    const newTouched = { ...touched };
    const newErrors = { ...errors };
    
    // Mark all previous fields as touched and validate them
    for (let i = 0; i < currentFieldIndex; i++) {
      const prevField = fieldOrder[i];
      newTouched[prevField] = true;
      
      // Validate previous field
      const error = validateField(prevField, formData[prevField]);
      if (error) {
        newErrors[prevField] = error;
      }
    }
    
    setTouched(newTouched);
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate on change
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched to show errors
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true
    });
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit to FormSubmit
    setSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/bedilacecollection@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          _subject: `New Enquiry: ${formData.subject}`,
          message: formData.message
        })
      });

      const data = await response.json();
      
      if (data.success || response.ok) {
        setSubmitted(true);
        setSubmitting(false);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again or contact us via WhatsApp.');
      setSubmitting(false);
    }
  };

  // Reset form after 4 seconds of successful submission
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setTouched({
          name: false,
          email: false,
          phone: false,
          subject: false,
          message: false
        });
        setErrors({});
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const getFieldClassName = (fieldName) => {
    const hasError = touched[fieldName] && errors[fieldName];
    return `form-group ${hasError ? 'has-error' : ''}`;
  };

  return (
    <div className="contact-page">
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We'd love to hear from you. Get in touch with us!
          </motion.p>
        </div>
      </motion.section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Get in Touch</h2>
              <p>Have questions about our products? We're here to help!</p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-details">
                    <h3>Address</h3>
                    <p>C1 Shop. - 6, Amar Colony, near Raghunath Mandir Lane,<br />Main Market, Amar colony, Lajpat Nagar 4,<br />New Delhi, Delhi 110024</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-details">
                    <h3>Phone</h3>
                    <p><a href="tel:+919899884227" className="contact-link">+91-9899884227</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-details">
                    <h3>Email</h3>
                    <p><a href="mailto:bedilacecollection@gmail.com" className="contact-link">bedilacecollection@gmail.com</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🕐</div>
                  <div className="info-details">
                    <h3>Business Hours</h3>
                    <p>Mon-Sun<br />11 AM - 9.30 PM<br />Shop is CLOSED on Every Tuesday</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-section"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Send us a Message</h2>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className={getFieldClassName('name')}>
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        placeholder="Your Name"
                      />
                      {touched.name && errors.name && (
                        <span className="error-message">{errors.name}</span>
                      )}
                    </div>

                    <div className={getFieldClassName('email')}>
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        placeholder="your.email@example.com"
                      />
                      {touched.email && errors.email && (
                        <span className="error-message">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className={getFieldClassName('phone')}>
                      <label htmlFor="phone">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={handleBlur}
                        placeholder="+91-XXXXX-XXXXX"
                      />
                      {touched.phone && errors.phone && (
                        <span className="error-message">{errors.phone}</span>
                      )}
                    </div>

                    <div className={getFieldClassName('subject')}>
                      <label htmlFor="subject">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                        placeholder="What is this regarding?"
                      />
                      {touched.subject && errors.subject && (
                        <span className="error-message">{errors.subject}</span>
                      )}
                    </div>
                  </div>

                  <div className={getFieldClassName('message')}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      rows="6"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                    {touched.message && errors.message && (
                      <span className="error-message">{errors.message}</span>
                    )}
                  </div>

                  <button type="submit" className="submit-button" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <p>Thank you for contacting us!</p>
                  <p>We will get back to you shortly.</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
