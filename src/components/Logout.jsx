import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {

    let navigate = useNavigate()

    useEffect(()=>{
        Logout()
    },[])

        let  Logout =()=> {
            localStorage.removeItem("jwt")
            localStorage.removeItem("profileData")
            navigate('/login')
        }

  return (
    <>
    </>
  )
}

export default Logout
