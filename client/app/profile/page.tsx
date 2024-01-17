"use client";

import React, { useState, FC } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Protected from "../hooks/useProtected";
import Profile from "../components/Profile/Profile";
import { useSelector } from "react-redux";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div>
      <Protected>
        <Heading
          title={`${user?.name} profile-Elearning`}
          description="Elearning is a platform for students to learn and get help from teachers"
          keywords="Programming , MERN ,REDUX , Machine Learning"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={user} />
      </Protected>
    </div>
  );
};
export default Page;
