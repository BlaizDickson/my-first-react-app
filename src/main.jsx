import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greeting from './Greeting.jsx'
import Lesson1 from './Lesson1.jsx'
import Product from "./Product"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Greeting />
    <Lesson1 />
    <Product />
  </React.StrictMode>,
)
