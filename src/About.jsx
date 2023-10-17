import React from 'react'
import { useEffect } from 'react'
import NavBar from './NavBar'

const About = () => {
  useEffect(() => {
    document.title = "About"
  }, [])

  return (
    <>
        <header>
            <NavBar />
        </header>
        <main>
            <p>This is a basic prototype to showcase React routing and component rendering.</p>
        </main>
    </>
  )
}

export default About