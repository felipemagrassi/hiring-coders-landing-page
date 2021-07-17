import React from "react";
import Form from "./Form";

const App = () => {
  return (
    <div className="brick">
      <div className="bg-opacity-80 bg-gray-900 w-full h-screen flex justify-center items-center flex-col lg:flex-row ">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" font-medium font-vibur neon-text">Black Friday </h1>
          <p className="text-white"> Clica ai </p>
        </div>
        <div className="flex justify-center items-center">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
