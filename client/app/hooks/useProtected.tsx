import { redirect } from "next/navigation";
import userAuth from "./userAuth";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function Protected({ children }: Props) {
  const isAuthenticated = userAuth();

  return isAuthenticated ? children : redirect("/");
}
