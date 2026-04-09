import React from "react";
import Navbar from "../shared/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <header className="">
        <Navbar></Navbar>
      </header>
      <main className="">
        <h1 className="text-red-500 font-bold text-2xl">
          hi, im from the react router
        </h1>{" "}
      </main>
      <footer className=""></footer>
    </>
  );
};

export default Root;
