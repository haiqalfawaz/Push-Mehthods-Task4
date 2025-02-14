import React, { useState } from "react";
import Sidebar from "@/components/sidebar";
import useUsers from "@/hooks/useUsers";
import { BiSearch, BiArrowToRight, BiArrowToLeft } from "react-icons/bi";
import { user } from "../../hooks/user.interface";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "200",
});

const Dashboard = () => {
  const {
    data,
    loading,
    error,
    handleNextPage,
    handlePrevPage,
    currentPage,
    formatDate,
  } = useUsers(1, 10);

  return (
    <div className="flex min-h-screen w-screen">
      <Sidebar />
      <div className="bg-moonlitMist w-full px-5 pb-7 pt-20">
        <div className="border border-black w-full h-full bg bg-twilightShadow rounded-lg text-white p-4 flex flex-col justify-start items-center gap-4">
          {/* Input search and Gender */}
          <div className="flex justify-end items-center w-full gap-10">
            <div className="flex justify-center items-center gap-3">
              <BiSearch />
              <input
                type="text"
                placeholder="Search"
                className="border-b-2 border-white outline-none bg-twilightShadow"
              />
            </div>
            <div className="flex justify-center items-center gap-3">
              <select className="bg-twilightShadow text-white border-b-2 border-white outline-none">
                <option value="">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          {/* Tables */}
          <div
            className={`${plusJakartaSans.className} w-full overflow-x-auto`}
          >
            <table className="min-w-full bg-white text-black rounded-lg">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="py-3 px-6 text-left">Username</th>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Gender</th>
                  <th className="py-3 px-6 text-left">Register Date</th>
                </tr>
              </thead>
              <tbody>
                {error ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-3 px-6 text-center text-red-500"
                    >
                      {error}
                    </td>
                  </tr>
                ) : (
                  data.map((user: user) => (
                    <tr
                      key={user.login.uuid}
                      className="border-b border-gray-300"
                    >
                      <td className="py-3 px-6">{user.login.username}</td>
                      <td className="py-3 px-6">
                        {user.name.first} {user.name.last}
                      </td>
                      <td className="py-3 px-6">{user.email}</td>
                      <td className="py-3 px-6">{user.gender}</td>
                      <td className="py-3 px-6">
                        {formatDate(user.registered.date)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center items-center gap-5">
            <button
              className="text-3xl bg-duskLilac p-1 w-fit rounded-lg transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_white] active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer active:duration-150"
              onClick={handlePrevPage}
            >
              <BiArrowToLeft />
            </button>
            <p>{currentPage}</p>
            <button
              className="text-3xl bg-duskLilac p-1 w-fit rounded-lg transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_white] active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer active:duration-150"
              onClick={handleNextPage}
            >
              <BiArrowToRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
