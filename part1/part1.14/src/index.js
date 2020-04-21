import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({onClick, label}) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])
  const copy = [...points]

  const random = () => Math.floor(Math.random() * anecdotes.length)

  const handleAnec = () => {
    console.log(selected)
    setSelected(random())
  }

  const handleVote = () => {
    copy[selected] += 1
    console.log(copy)
    setPoints(copy)
  }

  const Total = ({index}) => {
    return (
      <>
        has {index} votes<br></br>
      </>
    )
  }

  const maxval = () => Math.max(...points)
  const maxindex = () => points.indexOf(maxval())
  
  const MaxAnec = ({index}) => {
    console.log(points)
    if (maxval() === 0) {
      return (
        <>
        {anecdotes[0]}<br></br>
        <Total index={points[maxindex()]}/>
        </>
      )
    }

    return (
      <>
      {anecdotes[maxindex()]}<br></br>
      <Total index={points[maxindex()]}/>
      </>
    )
  }

  return (
    <div>
      <Title text='Anecdote of the day' />
      {anecdotes[selected]}<br></br>
      <Total index={points[selected]}/>
      <Button onClick={handleVote} label='vote' />
      <Button onClick={handleAnec} label='next anecdote' />
      <Title text='Anecdote with most votes' />
      <MaxAnec />
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />, 
  document.getElementById('root')
)