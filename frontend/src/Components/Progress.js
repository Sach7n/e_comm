import React from 'react'
import useAuth from '../hooks/useAuth'

const Progress = (file,setFile) => {
        console.log(file)

      const {user,status}=useAuth(file,'http://localhost:5000/admin/')
      console.log(user)


      
  return (
    <div>{status}</div>
  )
}

export default Progress;