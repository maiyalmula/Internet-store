import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/common.css'
import Header from './components/Header/Header.jsx'
import Promo from './components/Promo/Promo'
import Brand from './components/Brand/Brand'
import Arrivals from './components/Arrivals/Arrivals'
import Payday from './components/Payday/Payday'
import Favourites from './components/Favourites/Favourites'
import App from './components/App/App'
import Community from './components/Community/Community'
import Footer from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Promo />
    <Brand />
    <Arrivals />
    <Payday />
    <Favourites />
    <App />
    <Community />
    <Footer />
  </React.StrictMode>,
)
