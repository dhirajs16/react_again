import { useForm } from "react-hook-form";




const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const formHandleSubmit = (data) => {
    console.log(data)
  } 

  return(
    <>
        <h1>React Hook Form</h1>
        <form onSubmit={handleSubmit(formHandleSubmit)}>
          <label>First Name:</label>
          <input type="text" {...register("firstName")} /><br />
          <label>Last Name:</label>
          <input type="text" {...register("lastName")} /><br />
          <input type="submit" value="Submit" />
        </form>
    </>
  )
}

export default App;


