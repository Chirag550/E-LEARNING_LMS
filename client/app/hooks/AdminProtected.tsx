import { redirect } from "next/navigation";

import React from "react";
import { useSelector } from "react-redux";

interface Props {
  children: React.ReactNode;
}
export default function AdminProtected({ children }: Props) {
  const { user } = useSelector((state: any) => state.auth);
  const isAdmin = user?.role === "admin";

  return isAdmin ? children : redirect("/");
}
