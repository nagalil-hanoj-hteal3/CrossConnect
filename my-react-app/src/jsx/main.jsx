import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../jsx/Login.jsx';
import SignUp from '../jsx/SignUp.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);