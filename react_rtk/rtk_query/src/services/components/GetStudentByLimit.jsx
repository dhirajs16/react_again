import { useStudentByLimitQuery } from "../student"

const GetStudentByLimit = () => {
    const {data, isError, isLoading} = useStudentByLimitQuery(3)
  return (
    <>
        {isError?<>Some Error</> : isLoading? <>Loading...</> : <>
            
        </>}
    </>
  )
}

export default GetStudentByLimit