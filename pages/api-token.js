import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from '@/styles/ApiToken.module.css';

const supabaseUrl = 'https://zgjfvxglyiydrytbhuwc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnamZ2eGdseWl5ZHJ5dGJodXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NzcyMTAsImV4cCI6MTk5NDA1MzIxMH0.WGZHEZGAA8YQ2oJikbmanrhJtScfZCNdUNQh0DzdRKU'

const supabase = createClient(supabaseUrl, supabaseKey)

export default function ApiToken() {
  const [apiToken, setApiToken] = useState('');

  const generateToken = async () => {
    const { user, error } = await supabase.auth.signUp({ email: 'user@example.com', password: 'password' });
    if (error) return alert(error.message);
    const { session, error: signInError } = await supabase.auth.signIn({ email: 'user@example.com', password: 'password' });
    if (signInError) return alert(signInError.message);
    const { data, error: tokenError } = await supabase.from('api_tokens').insert([{ user_id: session.user.id }]);
    if (tokenError) return alert(tokenError.message);
    setApiToken(data[0].token);
  };

  return (
    <div>
      <h1>Generate API Token</h1>
      <button onClick={generateToken}>Generate Token</button>
      {apiToken && (
        <div>
          <h2>API Token:</h2>
          <code>{apiToken}</code>
        </div>
      )}
    </div>
  );
}
