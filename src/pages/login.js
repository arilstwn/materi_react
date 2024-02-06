import React, { useState } from 'react';

function Login() {
  // State untuk menyimpan nilai input dari form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Handler untuk meng-handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Proses autentikasi (biasanya dilakukan ke backend)
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset nilai input setelah submit
    setUsername('');
    setPassword('');
  };
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
