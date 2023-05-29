import React, { useState } from 'react';
import styles from './signup.module.css'
import { Mail, Apple,Twitter } from '@mui/icons-material';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };
  
    const handleDobChange = (e) => {
      setDob(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSignup = (e) => {
      e.preventDefault();
  
      const user = {
        name,
        email,
        phone,
        dob,
        password,
      };
  
      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify(user));
  
      
      setName('');
      setEmail('');
      setPhone('');
      setDob('');
      setPassword('');
    };
  
    return (
      <div className={styles['signup-container']}>
         <div className={styles['twitter-icon']}>
        <Twitter fontSize="large" />
      </div>
      <h1>Join Twitter today</h1>
        <div className={styles['signup-form-box']}>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <br />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          <br />
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={handleDobChange}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br />
          <button type="submit">Sign Up</button>
        </form>
        </div>
      <div className={styles['signup-links']}>
        <p>Sign up with:</p>
        <a href="https://example.com/google-signup">
          <Mail />
          Google Mail ID
        </a>
        <a href="https://example.com/apple-signup"> 
          <Apple />
          Apple ID
        </a>
      </div>
      <p>
        By signing up, you agree to the <a href="https://example.com/terms">Terms of Service</a> and{' '}
        <a href="https://example.com/privacy">Privacy Policy</a>, including Cookie Use.
      </p>
      <p>
        Have an account already? <a href="/login">Log in</a>
      </p>
    </div>
  );
};

export default SignupPage;