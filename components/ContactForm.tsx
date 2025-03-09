import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/ContactForm2.module.css'; 
import AnimateOnScroll from './AnimateOnScroll';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      to_name: 'Votre nom',
      message: message, // Assurez-vous que le nom du champ correspond à celui du modèle EmailJS
      reply_to: email,
    };

    emailjs.send(
      'service_gmail',
      'template_ejfu64v',
      templateParams,
      '8oDfhSGlFOjqOC1kI'
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSent(true);
      },
      (err) => {
        console.log('FAILED...', err);
      }
    );
  };

  return (
    <div className={styles.contactFormContainer}>
      <AnimateOnScroll animation="slideRight">
        <div className={styles.contactInfo}>
          <h1 className={styles.contactFormTitle}>Contactez-moi</h1>
          <p>Si vous avez des questions, des commentaires ou des suggestions, n'hésitez pas à m'envoyer un email. Je serai ravi de vous répondre dès que possible.</p>
        </div>
      </AnimateOnScroll>
      
      <AnimateOnScroll animation="slideLeft" delay={0.3}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nom</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className={styles.submitButton}>Envoyer</button>
          {sent && <p>Votre message a été envoyé avec succès !</p>}
        </form>
      </AnimateOnScroll>
    </div>
  );
};

export default ContactForm;
