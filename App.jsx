import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Meme from './components/Meme'
function App() {
  return (
    <div className='main'>
      <Navigation/>
      <Meme/>
    </div>
  )
}

export default App
