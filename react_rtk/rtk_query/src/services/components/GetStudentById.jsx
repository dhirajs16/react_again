import { useStudentByIdQuery } from "../student";

const GetStudentById = () => {
  const { isLoading, isError, data } = useStudentByIdQuery(3);
  return (
    <>
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
        </>
      )}
    </>
  );
};

export default GetStudentById;
