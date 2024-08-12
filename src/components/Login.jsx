import React, { useState } from "react";
import { getAuthToken, setAuthToken } from "./reducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import Logo from "./logo.png"

function Test() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  let handleUserName = (e) => {
    let data = e.target.value;
    console.log(data);
    setUserName(data);
    


  };
  let handlePassWord = (e) => {
    let data = e.target.value;
    console.log(data);
    setPassword(data);
    
  };

  let handleSubmit1 = () => {
    try {
      axios
        .post("http://localhost:8086/password.manager.com/user/sign_in", {
          username: userName,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          setAuthToken(response.data);
          navigate("/dashboard");
        }).catch((message)=>{
          alert("UserName or Password is Wrong" ,message)
        }) 
        
    } catch {
      console.log("hello");
    }

    if (getAuthToken() !== null && getAuthToken !== "null") {
      alert("Please dont go back....");
    }
  };

  return (
    <>
    <div className="sticky top-0">
    <NavBar/>
    </div>
    
    <div className="flex items-center justify-end min-w-full  md:h-[89vh] bg-cover bg-center w-screen flex-nowrap cursor-pointer  "
      style={{
        backgroundImage: `url(${Logo})`
      }}>
    <div className="flex flex-col justify-center items-end  p-[20px] overflow-hidden flex-nowrap ">
        <div className=" m-[30px] p-[40px] border rounded-[10px]   bg-white  min-h-[15rem] min-w-[27rem]">
          <p className="text-xl font-bold mb-[10px] ">Login</p>
          <label className="  "><i class="fa-solid fa-user-large text-3xl mr-2  mt-[10px]"></i></label>
          <input
            type="text"
            name=""
            id=""
            className="mb-[5px] ml-[10px] w-[10rem]  outline-none border-b hover:border-b-blue-400"
            onChange={handleUserName}
            value={userName}
            placeholder="Username"
          />{" "}
          <br />
          <label htmlFor="" className="text-2xl mt-[20px] pr-[8px] ">
          <i class="fa-solid fa-lock text-3xl mt-[10px]"></i>{" "}
          </label>
          <input
            type="password"
            name=""
            id=""
            className="w-[10rem] ml-[10px] outline-none border-b hover:border-b-blue-400"
            onChange={handlePassWord}
            value={password}
            placeholder="Password"
          />
          <br />
          <button
            className="border w-[8rem] rounded-[15px] bg-blue-500 font-bold mt-[30px] p-2  hover:bg-blue-600 ml-[10rem]"
            onClick={handleSubmit1}
          >
            Login
          </button>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Test;
