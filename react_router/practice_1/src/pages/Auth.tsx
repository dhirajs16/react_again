import { Outlet} from "react-router-dom"

const Auth = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-screen w-screen">
        <div className="col-span-1 w-full h-full bg-cyan-200 flex justify-center items-center text-9xl">Image</div>
        <div className="col-span-1">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Auth