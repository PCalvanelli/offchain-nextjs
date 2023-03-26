// SignUp.js
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import NavBar from '@/components/NavBar';
import styles from '@/styles/SignUp.module.css';

const supabaseUrl = 'https://zgjfvxglyiydrytbhuwc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnamZ2eGdseWl5ZHJ5dGJodXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NzcyMTAsImV4cCI6MTk5NDA1MzIxMH0.WGZHEZGAA8YQ2oJikbmanrhJtScfZCNdUNQh0DzdRKU'

export const supabase = createClient(supabaseUrl, supabaseKey);

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Form validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className={styles.container}>
        <form onSubmit={handleSignUp} className={styles.form}>
          <h1 className={styles.title}>Create your account</h1>
          <p className={styles.message}> Please enter your email and password to sign up and get early access to the Off Chain API!</p>
          {error && <div className={styles.error}>{error}</div>}
          <input type="email" value={email} onChange={handleEmailChange} className={styles.input} placeholder="Email" />
          <br />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.input}
            placeholder="Password"
          />
          <br />
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={styles.input}
            placeholder="Confirm Password"
          />
          <br />
          <button type="submit" className={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
