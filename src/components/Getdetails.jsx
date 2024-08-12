import React, { useState } from "react";
import { useEffect } from "react";
import { getRequest, getAuthToken } from "./reducer";
import { setProfileData, getProfileData } from "./reducer";
import { useNavigate } from "react-router-dom";
import NavBar2 from "./NavBar2";
function GetDetails() {
  // const config = {
  //     headers: { "Authorization": `Bearer ${"eyJhbGciOiJIUggzI1NiJ9.eyJzdWIiOiJuYWdhYmFidTAwNyIsImlhdCI6MTcyMTg5MTM3MSwiZXhwIjoxNzIxODk0OTcxfQ.IUxUfjEFZ67HgwX6jO-yNxBENb40szyuEK-e1lBkIhE"}`,
  //         "Accept" : '*/*',
  //         'Content-type': "applicatopn/json"

  //      }
  // };

  // useEffect(()=>{
  //     axios.get(`http://localhost:8086/password.manager.com/user/${getAuthToken}`,config)
  //     .then((res)=>{
  //         console.log(res.data);
  //         localStorage.setItem("userDetails", res)
  //     }).catch(message => console.log(message))
  // },[])
  useEffect(() => {
    if (getAuthToken() == null && getAuthToken() == "null") {
      navigate("/login");
      alert("Session timed-out Please login....");
    }
  }, []);

  let navigate = useNavigate();
  let profileData = JSON.parse(getProfileData("profileData"));
  const [flag, setFlag] = useState(false);
  // const [photo, setPhoto] = useState();
  useEffect(() => {
    getRequest(
      "GET",
      `http://localhost:8086/password.manager.com/user/${getAuthToken()}`
    )
      .then((response) => {
        // console.log(response.data);
        setProfileData(response.data);

        setFlag(true);
      })
      .catch((err) => {
        console.log(err);
        // alert("Please Login ....");
        navigate("/login");
      });
  }, []);

  // let username = "Tirumala"
  // let password = "kavi"

  // useEffect(()=>{



  function doesFlag(flag) {
    if (flag) {
      return true;
    } else {
      return false;
    }
  }
  // console.log(profileData);

  // let handlePhoto = (e) => {
  //   console.log(e.target.files);
  //   console.log(URL.createObjectURL(e.target.files[0]));
  //   setPhoto(URL.createObjectURL(e.target.files[0]));
  // };
// console.log(profileData);
  return (
    <>
      <NavBar2 />
      <div>
        <h1 className="text-3xl font-bold pb-[30px] m-[20px]"> Profile</h1>

        {/* <button
          onClick={handleSubmit}
          className="border bg-blue-400 rounded w-[10rem] font-bold"
        >
          Get Details
        </button>  */}

        {doesFlag(flag) ? (
          <div className="font-bold ml-[20px] h-[12rem] bg-gray-300 w-[20rem] p-4 border border-black rounded-[10px]">
            {/* <div className=" ml-[5rem] items-end ">
             
              <img src={photo} alt="alt" className=" rounded-[80px] w-[8rem] h-[8rem] text-center "/>
              
            </div> */}
            {/* <input onChange={handlePhoto} type="file" name="" id="" className=" ml-[5rem] w-[4.3rem] text-[10px]"/> */}
            <h1>FirstName : {profileData.first_name}</h1>
            <h1>LatName : {profileData.last_name}</h1>
            <h1>Email : {profileData.email}</h1>
            <h1>Phone : {profileData.phone}</h1>
            <h1>UserName : {profileData.userName}</h1>
            <h1>Role : {profileData.roles}</h1>


          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default GetDetails;
