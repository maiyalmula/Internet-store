import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/common.css'
import Header from './components/Header/Header.jsx'
import Promo from './components/Promo/Promo'
import Brand from './components/Brand/Brand'
import Arrivals from './components/Arrivals/Arrivals'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Promo />
    <Brand />
    <Arrivals />
  </React.StrictMode>,
)
