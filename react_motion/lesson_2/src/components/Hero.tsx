
const Hero:React.FC = () => {
  return (
    <>
        <div className="w-screen h-[90vh] grid grid-cols-4 px-10 py-5 gap-10">
            {/* Left side bar */}
            <div className="col-span-1 px-10 py-5 bg-cyan-100 rounded-lg"></div>
            <div className="col-span-3 px-10 py-5 bg-cyan-200 rounded-lg"></div>
        </div>
    </>
  )
}

export default Hero