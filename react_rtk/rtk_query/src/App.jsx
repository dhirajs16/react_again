import { useStudentListQuery } from "./services/student"

const App = () => {
  const response = useStudentListQuery()
  console.log(response.data)

  return (
    <>
      <h3>App</h3>
    </>
  )
}

export default App