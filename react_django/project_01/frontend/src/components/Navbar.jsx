import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <div className="w-screen h-[10vh] bg-cyan-700 text-white text-xl px-10 flex items-center justify-between">
            <div className="text-4xl font-bold">Logo</div>
            <div className="flex gap-10 ">
                <NavLink 
                    to='/'
                    className={({isActive}) => isActive && 'text-orange-500'}>
                    Home
                </NavLink>
                <NavLink 
                    to='create/'
                    className={({isActive}) => isActive && 'text-orange-500'}>
                    Create
                </NavLink>
                <NavLink 
                    to='update/'
                    className={({isActive}) => isActive && 'text-orange-500'}>
                    Update
                </NavLink>
            </div>
        </div>
    </>
  )
}

export default Navbar