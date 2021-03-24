import React from 'react'
import ReactDOM from 'react-dom'

// Las dos maneras son correctas de devolver una solución
const Header = ({ course }) => <h1>{course}</h1>
// const Tittle = ({course}) =>{
//   return <h1>{course}</h1>
// }

const Content = ({ part, exercises }) => {
  return (
    <div>

      <p>{part[0]} {exercises[0]}</p>
      <p>{part[1]} {exercises[1]}</p>
      <p>{part[2]} {exercises[2]}</p>
    </div>
  )
}
const Total = ({ totalShow }) => <strong>{totalShow}</strong>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = "Number of exercices: " + exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Content part={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total totalShow={total} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))