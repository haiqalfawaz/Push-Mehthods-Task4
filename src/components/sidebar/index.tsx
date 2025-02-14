import React from "react";
import { Poppins } from "next/font/google";
import { BsPeople, BsArrow90DegLeft } from "react-icons/bs";
import { useRouter } from "next/router";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Sidebar = () => {
  const router = useRouter();

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
      <button
        className="flex justify-center items-center mt-[550px] bg-duskLilac p-1 w-36 rounded-lg transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_white] active:translate-x-0 active:translate-y-0 active:shadow-none text-xl cursor-pointer active:duration-150"
        onClick={() => router.push("/landing")}
      >
        <BsArrow90DegLeft />
      </button>
    </div>
  );
};

export default Sidebar;
