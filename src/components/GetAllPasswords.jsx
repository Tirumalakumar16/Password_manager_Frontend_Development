import React, { useEffect, useState } from "react";
import NavBar2 from "./NavBar2";
import { getRequest, getAuthToken, localCartRequest } from "./reducer";
import { useNavigate } from "react-router-dom";

function GetAllPasswords() {

  useEffect(()=>{
    if(getAuthToken()== null || getAuthToken()=="null") {
      navigate('/login')
        alert("Session timed-out Please login....")
        
    }
  },[])
  const [passwords, setPasswords] = useState([]);

  let navigate = useNavigate()

  useEffect(() => {
    getRequest(
      "GET",
      `http://localhost:8086/password.manager.com/passwords/${getAuthToken()}`
    )
      .then((response) => {
        console.log(response.data);
        setPasswords(response.data);
        localStorage.setItem("allPasswords",JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(()=>{

  //   localCartRequest(
  //     "GET",
  //     `http://localhost:8888/www.localGrocery.com/customer/api/customers`
  //   ).then((response)=>{
  //     console.log(response);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // },[])

  let deleteFromPasswordsList = (id) => {
    getRequest(
      "DELETE",
      `http://localhost:8086/password.manager.com/password/${id}`
    ).then((response)=>{
      console.log(response.data);
      navigate('/allpasswords')
      alert(response.data)
     
    }).catch((err)=>{
      navigate("/login");
      console.log(err);
    })
  };

  return (
    <div className="sticky top-0">
      <NavBar2 />
      <div className="mt-8 rounded-lg ">
        <table className=" w-full border border-gray-600 rounded-lg  text-center ">
          <thead className="bg-gray-300 border border-gray-100 text-center">
            <tr>
              <th className="p-2  border border-gray-400">Email</th>
              <th className="border border-gray-400">Title</th>
              <th className="border border-gray-400">Title Address</th>
              <th className="border border-gray-400 ">Password</th>
              <th className="border border-gray-400">Remove</th>
            </tr>
          </thead>
          <tbody className="border border-gray-300 bg-gray-100">
            {passwords.map((password) => {
              return (
                <> 
                  
                  <tr className="border-b-4 border-gray-300"  >
                    <td className="flex justify-start items-center p-4">
                      {/* <img
                                  className="w-[200px] h-[100px] rounded-lg bd-cover"
                                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                  alt="movie"
                                /> */}
                      <div className="text-xl  ml-5 ">{password.email}</div>
                    </td>
                    
                    <td className="text-lg">{password.title}</td>
                    <td className="text-lg">{password.title_address}</td>
                    <td className="text-lg">{password.password}</td>
                    <td
                      onClick={() => deleteFromPasswordsList(password.id)}
                      className="text-red-600 cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetAllPasswords;
