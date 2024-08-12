import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postRequest } from './reducer'
import HomeBar from './HomeBar'

function Register() {

    const navigate = useNavigate()
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [email , setEmail] = useState('')
    const [phone , setPhone] = useState('')
    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')

    let handleFirstName = (e)=>{
        setFirstName(e.target.value)
    }
    let handleLastName = (e)=>{
        setLastName(e.target.value)
    }
    let handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    let handlePhone = (e)=>{
        setPhone(e.target.value)
    }
    let handleUserName = (e)=>{
        setUserName(e.target.value)
    }
    let handlePassword = (e)=>{
        setPassword(e.target.value)
    }
    

    let handleRegister = ()=>{

        postRequest(
            "POST",
            "http://localhost:8086/password.manager.com/user/sign_up",
            {
                first_name : firstName,
                last_name : lastName,
                email : email,
                phone : phone,
                userName : userName,
                password : password,

            }
        ).then((response)=>{
            console.log(response.data);
            navigate('/loginDirection')
            alert("Registered successfully")
          
        }).catch((message)=>{
            console.log(message);
        })

       

    }

    // console.log(email);

  return ( 
    <>
    <div className='flex space-x-8 items-center back bg-gray-600  h-15 p-1 sticky top-0'>
      <HomeBar/>
    </div>
    

     <div className="flex flex-col justify-center items-start p-[20px] overflow-hidden flex-nowrap min-w-full  md:h-100vh] bg-cover bg-center w-screen flex-nowrap  " 
     style={{
        backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/014/468/621/non_2x/abstract-digital-technology-background-with-concept-security-vector.jpg)`
      }}>
        <div className=" m-[50px] p-[40px] border rounded-[10px] h-[50vh] bg-pink-200  min-h-[35rem]  ml-[80px]">
          <label className="text-2xl bg-pink-200 p-[8px]">FirstName: </label>
          <input
            type="text"
            name=""
            id=""
            className="w-[10rem] bg-red-300 mt-[15px] p-[8px]"
            onChange={handleFirstName}
            value={firstName}
            placeholder='john'
          />{" "}
          <br />
          <label htmlFor="" className="text-2xl mt-[20px] pr-[9px] p-[10px]">
            LastName:{" "}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-[10rem] bg-red-300 mt-[15px] p-[8px]"
           onChange={handleLastName}
           value={lastName}
           placeholder='steve Roger'
          />
          <br />
          <label htmlFor="" className="text-2xl  pr-[58px] p-[10px] ">
            Email:{" "}
          </label>
          <input
            type="email"
            name=""
            id=""
            className="w-[10rem] bg-red-300 mt-[15px] p-[8px]"
            onChange={handleEmail}
            value={email}
            placeholder='example@gmail.com'
          />
          <br />
          <label htmlFor="" className="text-2xl mt-[20px] pl-[9px] ">
            Phone:{" "}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-[10rem] bg-red-300 ml-[49px] mt-[15px] p-[8px]"
            onChange={handlePhone}
            value={phone}
            placeholder='9999999999'
          />
          <br />
          <label htmlFor="" className="text-2xl mt-[20px] pl-[9px] ">
            UserName:{" "}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-[10rem] bg-red-300 ml-[5px] mt-[15px] p-[8px]"
            onChange={handleUserName}
            value={userName}
          />
          <br />
          <label htmlFor="" className="text-2xl mt-[20px] pl-[9px] ">
            Password:{" "}
          </label>
          <input
            type="password"
            name=""
            id=""
            className="w-[10rem] bg-red-300 ml-[16px] mt-[15px] p-[8px]"
            onChange={handlePassword}
            value={password}
          />
         
          <br />
          
          <button
            className="border w-[7rem] rounded-[5px] bg-blue-500 mt-[50px] p-[10px]" 
            onClick={handleRegister}
            >
            Register
          </button>
        </div>
      </div>
    
    </>
  )
}

export default Register
