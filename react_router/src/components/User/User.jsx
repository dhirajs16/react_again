import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <>
        <h1 className='text-3xl text-center text-white font-bold uppercase bg-gray-500 w-full py-3'>User: {userid}</h1>
    </>
  )
}

export default User