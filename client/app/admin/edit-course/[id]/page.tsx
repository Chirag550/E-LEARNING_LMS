"use client";
import DashBoardHero from "@/app/components/Admin/DashBoardHero";
import CreateCourse from "@/app/components/Admin/course/CreateCourse";
import EditCourse from "@/app/components/Admin/course/EditCourse";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import React from "react";

const page = ({ params }: any) => {
  const id = params?.id;
  return (
    <div>
      <Heading
        title={`Create-Course-Admin`}
        description="Elearning is a platform for students to learn and get help from teachers"
        keywords="Programming , MERN ,REDUX , Machine Learning"
      />
      <div className="flex h-full">
        {" "}
        <div className="1500px:w-[19%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashBoardHero />
          <EditCourse id={id} />
        </div>
      </div>
    </div>
  );
};

export default page;
