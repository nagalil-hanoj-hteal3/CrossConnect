import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import '../css/login.css'
import Login from '../jsx/Login.jsx'
import '../css/Signup.css'
import Signup from '../jsx/Signup.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
  {/*<Login></Login>*/}
  <Signup></Signup>
  

  </React.StrictMode>,
)
