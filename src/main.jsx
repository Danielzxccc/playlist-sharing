import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import 'bootstrap/scss/bootstrap.scss'
import './index.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://playlist-sharing-api.vercel.app/'
axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
