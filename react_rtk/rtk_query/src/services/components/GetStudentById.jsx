import { useState } from "react";
import { useStudentByIdQuery } from "../student";

const GetStudentById = () => {
    const [id, setId] = useState(null)
    const handleFormSubmit = (event) => {
        event.preventDefault()
        setId(event.target.value)
    }

  const { isLoading, isError, data } = useStudentByIdQuery(id);
  return (
    <>
    <form onSubmit={handleFormSubmit}>
        <input value={id} onChange={(event) => setId(event.target.value)} type="number" />
    </form>
    
    {isLoading ? (
    <>Loading...</>
  ) : isError ? (
    <>Something Wrong...</>
  ) : (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.city}</td>
          </tr>
        </tbody>
      </table>
    </>)
    }</>);
};

export default GetStudentById;
