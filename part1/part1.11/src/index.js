import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title1 = ({text}) => <h1>{text}</h1>

const Title2 = ({text}) => <h1>{text}</h1>

const Statistic = ({text, value}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({all, goodsum, neutralsum, badsum, avg, pos}) => {
  if (all === 0) {
    return (
      <div>No feedback is given</div>
    )
  }

  return (
  <div>
    <Statistic text='good' value={goodsum} />
    <Statistic text='neutral' value={neutralsum} />
    <Statistic text='bad' value={badsum} />
    <Statistic text='average' value={avg} />
    <Statistic text='positive' value={pos} />
  </div>
  )
}

const Button = ({onClick, label}) => {
  return (
    <>
    <button onClick={onClick}>
      {label}
    </button>
    </>
  )
}

const Buttons = ({GoodClick, NeutralClick, BadClick}) => {
  return (
    <>
    <Button onClick={GoodClick} label='good' />
    <Button onClick={NeutralClick} label='neutral' />
    <Button onClick={BadClick} label='bad' />
    </>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)    
  }

  const handleBad = () => {
    setBad(bad + 1)    
  }

  const all = () => {
    return good + neutral + bad
  }

  const avg = () => {
    return (good - bad)/all()
  }

  const pos = () => {
    return (good/all())*100+'%'
  }

  return (
    <div>
      <Title1 text={<b>give feedback</b>} />
      
      <Buttons GoodClick={handleGood} NeutralClick={handleNeutral} BadClick={handleBad} />

      <Title2 text={<b>statistics</b>} />

      <Statistics goodsum={good} badsum={bad} neutralsum={neutral}
      all={all()} avg={avg()} pos={pos()}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)