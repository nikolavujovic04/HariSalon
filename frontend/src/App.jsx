import { useState } from 'react'
import { Navbar } from './layout/Navbar'
import HeroSection from './sections/hero/HeroSection'
import CuratedServices from './sections/services/CuratedServices'
import BookingSection from './sections/reservation/BookingSection'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CuratedServices></CuratedServices>
      <BookingSection></BookingSection>
    </>
  )
}

export default App
