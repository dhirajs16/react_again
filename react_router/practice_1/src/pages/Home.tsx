import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
        <div>Home</div>
        <Link to="/contact">contact</Link>
        <Link to="/login">Login</Link>
    </>
  )
}

export default Home