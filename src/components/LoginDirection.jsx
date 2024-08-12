import React from "react";
import HomeBar from "./HomeBar";

function LoginDirection() {
  return (
    <>
      <HomeBar />
      <div className="mt-[15rem] ml-[30rem]">
        <div className="font-bold">
          <p>
            Registration completed Successfully ...{" "}
            <a href="/login" className="underline text-green-500 ">
              Please login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginDirection;
