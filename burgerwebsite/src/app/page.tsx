import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Progressor from './components/Progressor'
import Burger from './components/Burger'
import Banner from './components/Banner'
import ProductList from './components/ProductList'
import Menuitems from './components/Menuitem'
import Offer from './components/Offer'
import Card from './components/Card'
import Reservation from './components/Reservation'
import Footer from './components/Footer'



export default function App() {
  return (
    <div className='bg-gradient-to-r from-black to-slate-700 min-h-screen text-white'>
  <Navbar />
  <Carousel />
  <Progressor />
  <Burger />
  <Banner />
  <ProductList />
  <Menuitems />
  <Offer />
  <Card />
  <Reservation />
  <Footer />
      </div>
  )
}
