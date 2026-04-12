import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <header className="sticky top-0 bg-base-100 border-b-2 border-base-300">
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
