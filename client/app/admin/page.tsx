"use client";
import React from "react";
import AdminProtected from "../hooks/AdminProtected";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar";
import DashBoardHero from "../components/Admin/DashBoardHero";

const page = () => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title={`Elearning-Admin`}
          description="Elearning is a platform for students to learn and get help from teachers"
          keywords="Programming , MERN ,REDUX , Machine Learning"
        />
        <div className="flex h-[200vh]">
          {" "}
          <div className="1500px:w-[15%] w-1/5">
            <AdminSidebar />
          </div>
          <div></div>
          <div className="w-[85%]">
            <DashBoardHero />
            Chirag
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
