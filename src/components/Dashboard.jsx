import {React, useEffect} from "react";
import NavBar2 from "./NavBar2";
import { getAuthToken } from "./reducer";
import { useNavigate } from "react-router-dom";


function Dashboard() {

    let navigate = useNavigate()

    useEffect(()=>{
        if(getAuthToken()== null) {
          navigate('/login')
         //   alert("Session timed-out Please login....")
            
        }
      },[])
  return (
    <>
    <div className="sticky top-0">
    <NavBar2 />
    </div>
      
      <div className="font-bold text-2xl p-[20px]">
        <h1>Welcome to Password Manager Application</h1>
      </div>
    </>
  );
}

export default Dashboard;
