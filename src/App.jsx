import { useState } from 'react'
import './App.css'
import Banner from '@webjet/react/components/banner'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='main-header'>Shared App</h1>
      <Banner>
        <h3>Promo Banner </h3>
      </Banner>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
