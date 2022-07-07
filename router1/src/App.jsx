import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './component/Navbar'
import Allroutes from './component/Allrouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
    </div>
  )
}

export default App
