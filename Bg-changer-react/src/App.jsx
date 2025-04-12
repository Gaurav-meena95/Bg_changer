import { useState } from 'react'
import './index.css'
import Background from './BG_change'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
    <Background btnColor={color} setColor={setColor} />
    </>
  )
}

export default App
