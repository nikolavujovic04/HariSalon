import { useState } from 'react'
import { Navbar } from './layout/Navbar'
import HeroSection from './sections/hero/HeroSection'
import CuratedServices from './sections/services/CuratedServices'
import BookingSection from './sections/reservation/BookingSection'
import BarberSection from './sections/barbers/BarberSection'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CuratedServices></CuratedServices>
      <BookingSection></BookingSection>
      <BarberSection></BarberSection>
    </>
  )
}

export default App
