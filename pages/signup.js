// SignUp.js
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import NavBar from '@/components/NavBar';

const supabaseUrl = 'https://zgjfvxglyiydrytbhuwc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnamZ2eGdseWl5ZHJ5dGJodXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NzcyMTAsImV4cCI6MTk5NDA1MzIxMH0.WGZHEZGAA8YQ2oJikbmanrhJtScfZCNdUNQh0DzdRKU';


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
    <form onSubmit={handleSignUp}>
      {error && <div>{error}</div>}
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
