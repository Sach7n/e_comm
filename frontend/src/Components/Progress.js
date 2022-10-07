import React, { useContext,useEffect} from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import { ProdContext } from '../Context';

const Progress = (file,setFile,children) => {
  const { setUserMehod} = useContext(ProdContext);
  const {user,status}=useAuth(file,'http://localhost:5000/admin/')

  useEffect(()=>{
        setUserMehod(user)

      },[user])

      console.log(user)
      //setUserMehod(user)

      if (status===200){
        <h1>success</h1>
      }
      
  return  (
  <>
  {user && (
    <Navigate to='/admin/addProduct' />
  )}
  </>)
}

export default Progress;