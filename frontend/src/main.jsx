import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"
import AuthoProvider from './context/Autho.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthoProvider>
       <App /> 
    </AuthoProvider>
  </BrowserRouter>
)


