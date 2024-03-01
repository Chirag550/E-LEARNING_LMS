import React, { FC } from "react";
import { IoMdCheckmark } from "react-icons/io";

type Props = {
  active: number;
  setActive: (active: number) => void;
};
const CourseOptions: FC<Props> = ({ active }) => {
  const options = [
    "Course Information",
    "Course Data",
    "Course Content",
    "Course Preview",
  ];
  return (
    <div
      className={`w-[100%] m-auto flex 800px:block justify-between items-center `}
    >
      {options.map((option: any, index: number) => (
        <div
          key={index}
          className={`w-full m-[13px] 800px:m-[0px] 800px:flex py-5`}
        >
          <div
            className={`w-[35px] h-[35px]  rounded-full  flex items-center justify-center ${
              active + 1 > index ? "bg-blue-500" : "bg-[#384766]"
            } relative`}
          >
            <IoMdCheckmark className=" text-[25px]" />
            {index !== options.length - 1 && (
              <>
                <div
                  className={`absolute hidden 800px:block h-[65px] w-1   ${
                    active + 1 > index ? "bg-blue-500" : "bg-[#384766]"
                  } bottom-[-150%]  `}
                />
                <div
                  className={`absolute 800px:hidden h-[2px]  w-[60px] ${
                    active + 1 > index ? "bg-blue-500" : "bg-[#384766]"
                  } top-[50%] bottom-[100%] left-[100%]   `}
                />
              </>
            )}
          </div>
          <h5
            className={`p-3 800px:pl-3 ${
              active === index
                ? "dark:text-white text-black"
                : "dark:text-white text-black"
            } text-[10px] 800px:text-[20px]`}
          >
            {option}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default CourseOptions;
