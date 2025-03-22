import { useState } from 'react'

const Header = () => {
  return(
      <h1>
        Give Feedback
      </h1>
  
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }


  return (
    <div>
      <Header />
      <button onClick={handleClick}>good</button>

    </div>
  )
}

export default App