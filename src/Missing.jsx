import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  useEffect(() => {
    document.title = "404 Page Not Found"
  }, [])


  return (
    <main>
      <p>Page not found.</p>
      <p>
        <Link to='/' onClick={() => {if (window.scrollY !== 0) window.scrollTo(0,0)}}>Return to Home</Link>
      </p>
    </main>
  )
}

export default Missing