
import React from 'react'
import Container from './_components/Container'
import Hero from './_components/Hero'
import Features from './_components/Features'
import Testimonials from './_components/Testimonials'
import Cta from './_components/Cta'

const Home = () => {
  return (
    <Container>
      <Hero />
      <Features />
      <Testimonials />
      <Cta />
    </Container>
  )
}

export default Home