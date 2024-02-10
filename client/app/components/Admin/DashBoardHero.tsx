import React, { FC, useState } from "react";
import DashboardHeader from "./DashBoardHeader";
import DashboardWidgets from "./Widgets/DashboardWidgets";

type props = {
  isDashboard?: boolean;
};
const DashBoardHero: FC<props> = ({ isDashboard }: props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <DashboardHeader open={open} setOpen={setOpen} />
      {isDashboard && <DashboardWidgets open={open} />}
    </div>
  );
};

export default DashBoardHero;
