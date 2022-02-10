import React from 'react';
import { useState } from 'react';

export default function AuthPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
    
  return (
    <div className='auth'>
      <h2>The Very Nice Restaurant Inventory</h2>
      <form>
        <label>Email
          <input required type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </label>  
        <label>Password
          <input required type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <button>Sign Up</button>      
      </form>
      <button type="button">Sign In</button>
    </div>
  );
}


