import React from "react";
import { Outlet } from "react-router-dom";

/* components */
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function PublicLayout() {
  return (
    <>
      <NavBar />
      <main className="mt-[150px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default PublicLayout;
