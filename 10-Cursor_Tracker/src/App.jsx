import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div 
        className='cursor-dot' 
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
        }}
      ></div>
      <div 
        className='cursor-outline' 
        style={{
          transform: `translate3d(${mousePosition.x - 15}px, ${mousePosition.y - 15}px, 0)`
        }}
      ></div>
    </>
  )
}

export default App
