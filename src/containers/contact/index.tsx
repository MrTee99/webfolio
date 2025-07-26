import React from 'react';
import ContactForm from './contact-form';
import ContactHero from './contact-hero';

const ContactIndex: React.FC = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
    </div>
  );
};

export default ContactIndex;
