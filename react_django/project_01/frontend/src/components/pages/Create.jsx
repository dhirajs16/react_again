import { useForm } from "react-hook-form";

const Create = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
    console.log(data)
  }

  return (
    <div className="w-screen h-[70vh] p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-[4px] border-orange-500 rounded-md p-10 w-1/2 mx-auto flex flex-col gap-5 justify-center items-center"
      >
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Minimum 3 letters are required" },
          })}
          placeholder="Enter your name"
          className="p-3 w-1/2 rounded-md"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <select
          {...register("gender", { required: true })}
          className="p-3 w-1/2 rounded-md"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>

        <input
          type="number"
          {...register("age", { required: true })}
          placeholder="Enter your age"
          className="p-3 w-1/2 rounded-md"
        />
        <input
          type="text"
          {...register("course", { required: true })}
          placeholder="Enter your course"
          className="p-3 w-1/2 rounded-md"
        />
        <input
          className="p-3 w-1/3 bg-orange-500 rounded-md"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Create;
