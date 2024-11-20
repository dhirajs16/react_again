import CreateStudent from "./services/components/CreateStudent";
import GetAllData from "./services/components/GetAllData";
import GetStudentById from "./services/components/GetStudentById";
import GetStudentByLimit from "./services/components/GetStudentByLimit";
import { useDeleteStudentByIdMutation } from "./services/student";

const App = () => {
  const [deleteStudent, {isError, isLoading, isSuccess }] = useDeleteStudentByIdMutation()
  return (
    <>
      <GetAllData />
      <GetStudentById />
      <GetStudentByLimit />
      <CreateStudent />
      <button onClick={() => deleteStudent(4)}>Delete</button>
      {isError && <p>Deletion Error</p>}
      {isLoading && <p>Loading....</p>}
      {isSuccess && <p>Deleted Successfully...</p>}

    </>
  )
}
export default App;
