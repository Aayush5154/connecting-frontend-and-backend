import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  axios from 'axios'

function App() {
  const[jokes, setjokes] = useState([])
  
  useEffect(() => {
    axios.get('/api/jokes')
    // but /api/jokes doest exits so here the concept of proxys comes 
    .then((response) => {
      setjokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h1>
      Hello Aayush
      </h1>
      <p>
        Jokes : {jokes.length}
      </p>

      {
        jokes.map((joke, index) => (
          // paranthesis use kiye becuase ham return keyword ka use nahi ker rahe 
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}
export default App
