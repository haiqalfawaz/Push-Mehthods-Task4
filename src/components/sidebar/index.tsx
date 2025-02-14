import React from "react";
import { Poppins } from "next/font/google";
import { BsPeople } from "react-icons/bs";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Sidebar = () => {
  return (
    <div className="w-64 bg-twilightShadow text-white p-4 flex flex-col justify-start items-center gap-5">
      <h3 className={`${poppins.className} text-center text-3xl`}>
        Random User
      </h3>
      <ul>
        <li className="flex justify-center items-center gap-5 bg-duskLilac p-1 w-36 rounded-lg transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_white] active:translate-x-0 active:translate-y-0 active:shadow-none text-xl cursor-pointer active:duration-150">
          <BsPeople />
          Users
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
