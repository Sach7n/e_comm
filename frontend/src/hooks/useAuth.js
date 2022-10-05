import React, { useState,useEffect } from 'react'

const useAuth = (data,url) => {
    
    const [user, setUser] = useState(null)
    const [status, setStatus] = useState(null)
    const items = data.file
  
    console.log(data.file)
    console.log(url)
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
              }
              else{
                console.log("wrong credentials",items )
                setStatus(items.status)
              }
            })
            .catch((error) => {
              console.error('Error:', error);
            });},[items,url])
    
    return { user,status };
};

export default useAuth;