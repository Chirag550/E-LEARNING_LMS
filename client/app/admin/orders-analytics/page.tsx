"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "../../../app/utils/Heading";

import OrdersAnalytics from "../../../app/components/Admin/Analytics/OrdersAnalytics";
import DashBoardHero from "@/app/components/Admin/DashBoardHero";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="Elearning - Admin"
        description="ELearning is a platform for students to learn and get help from teachers"
        keywords="Prograaming,MERN,Redux,Machine Learning"
      />
      <div className="flex">
        <div className="1500px:w-[19%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashBoardHero />
          <OrdersAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;
