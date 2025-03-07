import { useState } from 'react'

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad

  return (
    <div>
      <h1>Give Your Feedback Please</h1>

      <button onClick={() => setGood(good + 1)}>good</button>

      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>

      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App
