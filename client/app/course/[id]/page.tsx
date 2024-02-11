"use client";

import CourseDetailsPage from "@/app/components/Course/CourseDetailsPage";
import React, { useState, FC } from "react";

interface Props {}

const Page: FC<Props> = ({ params }: any) => {
  return (
    <div>
      <CourseDetailsPage id={params?.id} />
    </div>
  );
};
export default Page;
