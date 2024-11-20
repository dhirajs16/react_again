import { useCreateStudentMutation } from "../student";

const CreateStudent = () => {
  const [createStudent, { isError, isLoading, isSuccess }] =
    useCreateStudentMutation();

  return (
    <>
      <button onClick={() => createStudent({'name': 'RamNarayan', 'age': 35, 'city': 'KTM'})}>Create</button>
      {isError && <p>Deletion Error</p>}
      {isLoading && <p>Loading....</p>}
      {isSuccess && <p>Created Successfully...</p>}
    </>
  );
};

export default CreateStudent;
