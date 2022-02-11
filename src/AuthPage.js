import React from 'react';
import { useState } from 'react';
import { signIn, signUp } from './services/fetch.utils';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUp(email, password);

    setUser(user);

    setEmail('');
    setPassword('');
  }
    
  async function handleSignIn() {
    const user = await signIn(email, password);

    setUser(user);

    setEmail('');
    setPassword('');
  }
    
  return (
    <div className='auth'>
      <h2>The Very Nice Restaurant Inventory</h2>
      <form onSubmit={handleSignUp}>
        <label>Email
          <input required type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </label>  
        <label>Password
          <input required type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <button>Sign Up</button>      
      </form>
      <button type="button" onClick={handleSignIn}>Sign In</button>
    </div>
  );
}


