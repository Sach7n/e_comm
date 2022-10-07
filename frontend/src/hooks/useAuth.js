import React, { useState,useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const useAuth = (data,url) => {
    
    const [user, setUser] = useState(null)
    const [status, setStatus] = useState(null)
    const items = data.file  
    console.log(data.file)

    useEffect(() => {
    fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify(items)

            }).then((items) => {
              if(items.status == 200){
                console.log("success",items)
                setStatus(items.status)
                setUser(data.file.name)
              }
              else{
                console.log("wrong credentials",items )
                setStatus(items.status)
              }
            })
            .catch((error) => {
              console.error('Error:', error);
            });},[items,url])
            //console.log(user)
    return { user,status };
};

export default useAuth;