import { useState } from 'react'

const Header = () => {
  return <h1>Give Feedback</h1>
}

const Total = ({ good, neutral, bad }) => {
  return <div>all {good + neutral + bad}</div>
}

const Average = ({ good, neutral, bad }) => {
  return (
    <div>
      average{' '}
      {good + neutral + bad === 0 ? 0 : ((good - bad) / (good + neutral + bad)).toFixed(1)}
    </div>
  )
}

const Positive = ({ good, neutral, bad }) => {
  return (
    <div>
      positive {good + neutral + bad === 0 ? 0 : (good / (good + neutral + bad) * 100).toFixed(1)} %
    </div>
  )
}

const Statistics = ({good, neutral, bad }) => {
  return (
    <div>
        <h1>Statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <Total good={good} neutral={neutral} bad={bad} />
      <Average good={good} neutral={neutral} bad={bad} />
      <Positive good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header />
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
