import React from 'react';
import { Calculator } from './components';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>The Almighty Calculator!</h1>
      <Calculator />
      <p className="footer">All Rights Reserved, TylerjusFly</p>
    </div>
  );
}
