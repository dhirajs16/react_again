import GetAllData from "./services/components/GetAllData";
import GetStudentById from "./services/components/GetStudentById";
import GetStudentByLimit from "./services/components/GetStudentByLimit";

const App = () => {
  return (
    <>
      <GetAllData />
      <GetStudentById />
      <GetStudentByLimit />
    </>
  )
}
export default App;
