import { useState } from 'react'

const Header = () => {
  return <h1>Give Feedback</h1>
}

// New Button component
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

// New StatisticLine component
const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : ((good - bad) / total).toFixed(1)
  const positive = total === 0 ? 0 : ((good / total) * 100).toFixed(1)

  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No Feedback Given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={total} />
        <StatisticLine text='average' value={average} />
        <StatisticLine text='positive' value={positive + ' %'} />
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
