import { useState, useEffect} from 'react'
import axios from 'axios'


const App = () => {
  const [students, setStudents] = useState([])
  const [item, setItem] = useState('')


  const allStudents = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/')
      // console.log(response.data)
      setStudents(response.data)
    } catch (error) {
      console.log('Fetching Error:', error)
    }
  }
  
  const showStudent = students.map((student, index) => {
    return <h3 key={index}>{ student.name }</h3>
  })

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/', item)
      console.log(response)
    } catch (error) {
      console.log('Post error:', error)
    }
  }
  return (
    <>
      <h1>React+Django</h1>
      <form onSubmit={handleFormSubmit}>
          <input value={item} onChange={(e) => setItem(e.target.value)} type="text" name='' />
          <button type='submit'>Submit</button>
      </form>
      <button onClick={ allStudents }>Students List</button>
      {showStudent}
    </>
  )
}

export default App