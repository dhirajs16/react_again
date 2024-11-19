import { useStudentByLimitQuery } from "../student"

const GetStudentByLimit = () => {
    const {data, isError, isLoading} = useStudentByLimitQuery(3)
    console.log("Limit", data)
  return (
    <>
        {isError?<>Some Error</> : isLoading? <>Loading...</> : <>
            
        </>}
    </>
  )
}

export default GetStudentByLimit