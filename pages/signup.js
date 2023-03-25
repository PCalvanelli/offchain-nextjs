// SignUp.js

import React, { useState } from 'react';
import styles from 'styles/SignUp.module.css';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import NavBar from '@/components/NavBar';

const supabaseUrl = 'https://zgjfvxglyiydrytbhuwc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnamZ2eGdseWl5ZHJ5dGJodXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NzcyMTAsImV4cCI6MTk5NDA1MzIxMH0.WGZHEZGAA8YQ2oJikbmanrhJtScfZCNdUNQh0DzdRKU';
const supabase = createClient(supabaseUrl, supabaseKey);

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const router = useRouter();

const handleSubmit = async (e) => {
  e.preventDefault();

  const { email, password } = formData;

  try {
      const { user } = await supabase.auth.signUp({
        email,
        password,
      });

      if (user) {
        setSuccessMessage('Thanks for signing up!');
        setFormData({
          email: '',
          password: '',
        });
        setSubmitted(true);
        router.push('/success'); // Redirect to the Success page
      }
    } catch (error) {
      console.log(error);

      if (error.code === '23505') {
        setFormErrors({
          email: 'This email is already registered.',
          password: '',
        });
      } else {
        setFormErrors({
          email: '',
          password: 'Something went wrong. Please try again later.',
        });
      }
    }
};


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setFormErrors((prevState) => ({
      ...prevState,
      [name]: '',
    }));
  };

  return (
    <div>
    < NavBar />
    <div className={styles.container}>
      <div className={styles.card}>
        <img className ={styles.logo} src='/hippo_logo-removebg-preview.png' alt='Off Chain Data' />
        <h1 className={styles.title}>Create your account</h1>
        {submitted && successMessage && (
          <p className={styles.successMessage}>{successMessage}</p>
        )}
        <form className={styles.signUpForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              placeholder='Email Address'
              className={`${styles.formField} ${formErrors.email && styles.formFieldError}`}
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className={styles.errorMessage}>{formErrors.email}</p>
            )}

          </div>
          <div className={styles.formGroup}>
            <input
              placeholder='Password'
              className={`${styles.formField} ${formErrors.password && styles.formFieldError}`}
              type='password'
              id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
            />
            {formErrors.password && (
                <p className={styles.errorMessage}>{formErrors.password}</p>
            )}
            </div>
            <button className={styles.submitButton} type='submit'>
                Sign Up
            </button>
        </form>
        </div>
    </div>
    </div>
    );
}

export default SignUp;
