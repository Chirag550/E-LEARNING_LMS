"use client";
import AllCourses from "../../components/Admin/course/AllCourses";
import DashBoardHero from "../../../app/components/Admin/DashBoardHero";
import AdminSidebar from "../../../app/components/Admin/sidebar/AdminSidebar";
import AdminProtected from "../../../app/hooks/AdminProtected";
import Heading from "../../../app/utils/Heading";
import React from "react";

const page = () => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title={`Elearning-Admin`}
          description="Elearning is a platform for students to learn and get help from teachers"
          keywords="Programming , MERN ,REDUX , Machine Learning"
        />
        <div className="flex h-screen">
          {" "}
          <div className="1500px:w-[19%] w-1/5">
            <AdminSidebar />
          </div>
          <div></div>
          <div className="w-[85%]">
            <DashBoardHero />
            <AllCourses />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
