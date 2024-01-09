import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactUs from '../../allComponents/ContactUs';
import '@testing-library/jest-dom';

test('renders ContactUs component', () => {
  render(<ContactUs />);
  
  // Check if the main title and description are rendered
  const mainTitleElement = screen.getByText('Contact us');
  expect(mainTitleElement).toBeInTheDocument();

  const descriptionElement = screen.getByText('Do you have any questions? Please do not hesitate to reach out to us directly. Our team will respond promptly to assist you.');
  expect(descriptionElement).toBeInTheDocument();

  // Check if input fields and labels are associated correctly
  const nameInput = screen.getByLabelText('Your full name');
  expect(nameInput).toBeInTheDocument();

  const emailInput = screen.getByLabelText('Your email address');
  expect(emailInput).toBeInTheDocument();

  const subjectInput = screen.getByLabelText('Subject');
  expect(subjectInput).toBeInTheDocument();

  const messageTextarea = screen.getByLabelText('Your message');
  expect(messageTextarea).toBeInTheDocument();

  // Check if the form submission button is present
  const sendButton = screen.getByText('Send Message');
  expect(sendButton).toBeInTheDocument();

  // Check if contact information is displayed
  const addressElement = screen.getByText('123 Main St, Cityville, Country');
  expect(addressElement).toBeInTheDocument();

  const phoneElement = screen.getByText('+1 234 567 890');
  expect(phoneElement).toBeInTheDocument();

  const emailContactElement = screen.getByText('info@example.com');
  expect(emailContactElement).toBeInTheDocument();
});
