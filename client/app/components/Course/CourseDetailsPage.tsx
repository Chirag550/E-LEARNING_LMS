import { useGetCourseDetailsQuery } from "@/redux/features/courses/courseApi";
import React, { useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
import Header from "../Header";
import Footer from "../Footer";
import CourseDetails from "./CourseDetails";

type Props = {
  id: string;
};
const CourseDetailsPage = ({ id }: Props) => {
  const [open, setOpen] = useState(false);

  const [route, setRoute] = useState("Login");

  const { data, isLoading } = useGetCourseDetailsQuery(id);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Heading
            title={data.course.name + "-Elearning"}
            description="Elearning is a platform for students to learn and get help from teachers"
            keywords={data?.course.tags}
          />
          <Header
            open={open}
            setOpen={setOpen}
            activeItem={1}
            setRoute={setRoute}
            route={route}
          />
          <CourseDetails data={data.course} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default CourseDetailsPage;
