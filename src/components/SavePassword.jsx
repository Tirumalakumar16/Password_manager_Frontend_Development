import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar2 from "./NavBar2";
import { getRequest, getAuthToken } from "./reducer";

function SavePassword() {
  useEffect(() => {
    if (getAuthToken() == null || getAuthToken() == "null") {
      navigate("/login");
      alert("Session timed-out Please login....");
    }
  }, []);

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [title_address, setTitleAddress] = useState("");
  const [password, setPassword] = useState("");
  const [remarks, setRemarks] = useState("");

  let handletitle = (e) => {
    setTitle(e.target.value);
  };
  let handleTitleAddress = (e) => {
    setTitleAddress(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };
  let handleRemarks = (e) => {
    setRemarks(e.target.value);
  };

  let handleSave = () => {
    getRequest(
      "POST",
      `http://localhost:8086/password.manager.com/password/${getAuthToken()}`,
      {
        title: title,
        title_address: title_address,
        password: password,
        remarks: remarks,
      }
    )
      .then((response) => {
        console.log(response);
        alert(response.data);
        navigate("/allpasswords");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <NavBar2 />
      <div
        className="flex flex-col justify-center items-start p-[20px] overflow-hidden flex-nowrap min-w-full  md:h-100vh] bg-cover bg-center w-screen flex-nowrap  "
        style={{
          backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/014/468/621/non_2x/abstract-digital-technology-background-with-concept-security-vector.jpg)`,
        }}
      >
        <div className=" m-[50px] p-[40px] border rounded-[10px] h-[50vh] bg-white  min-h-[30rem] min-w-[27rem]  ml-[80px]">
          <p className="text-2xl mb-[2rem] font-bold text-gray-600">
            Save Passwords
          </p>
          <label className="text-2xl font-bold p-[8px] ml-[5rem]">
            Title:{" "}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-[10rem] outline-none border-b hover:border-b-blue-400 mt-[15px] p-[8px]"
            onChange={handletitle}
            value={title}
            placeholder="Gmail or Instagram"
          />{" "}
          <br />
          <label
            htmlFor=""
            className="font-bold text-2xl mt-[20px] pr-[8px] p-[10px]"
          >
            Title Address:{" "}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-[10rem] outline-none border-b hover:border-b-blue-400 mt-[15px] p-[8px] "
            onChange={handleTitleAddress}
            value={title_address}
            placeholder="exampe@gmail.com"
          />
          <br />
          <label htmlFor="" className="font-bold text-2xl mt-[20px] pl-[9px] ">
            Password:{" "}
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="password"
            className="w-[10rem] outline-none border-b hover:border-b-blue-400 ml-[16px] mt-[15px] p-[8px]"
            onChange={handlePassword}
            value={password}
          />
          <br />
          <label htmlFor="" className="font-bold text-2xl mt-[20px] pl-[9px] ">
            Remarks:{" "}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-[10rem] outline-none border-b hover:border-b-blue-400 ml-[16px] mt-[15px] p-[8px]"
            onChange={handleRemarks}
            value={remarks}
            placeholder="password is for ..."
          />
          <br />
          <button
            className="border w-[7rem] rounded-[5px] bg-blue-500 mt-[50px] p-[10px] text-lg font-bold"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default SavePassword;
