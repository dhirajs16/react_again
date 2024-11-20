import { useStudentListQuery } from "../student";

const GetAllData = () => {
  const { data, isLoading, isError } = useStudentListQuery();
  
  return isLoading ? (
    <>Loading...</>
  ) : isError ? (
    <>Theres an error</>
  ) : (
    <>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value) => (
              <tr key={value.id}>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetAllData;
