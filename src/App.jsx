import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titletimer from './titletimer'
import Downtimer from './Downtimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
      
       <Downtimer />
      </div>
     
  );
}

export default App
