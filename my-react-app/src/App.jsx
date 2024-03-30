import { useState } from 'react'
import './styles/About.css'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About/>
    </>
  )
}

export default App
