import { useState } from 'react'
import './index.css'
import Background from './BG_change'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
    <Background/>
    </>
  )
}

export default App
