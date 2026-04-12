import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <header className="">
        <Navbar></Navbar>
      </header>
      <main className="">
        <Outlet></Outlet>
      </main>
      <footer className=""></footer>
    </>
  );
};

export default Root;
