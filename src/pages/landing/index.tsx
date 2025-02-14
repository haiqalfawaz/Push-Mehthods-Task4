import React from "react";
import { Righteous } from "next/font/google";
import { useRouter } from "next/router";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-moonlitMist p-10 flex flex-col justify-center items-center gap-10">
      <div>
        <h1 className={`${righteous.className} text-4xl font-bold`}>
          Here all of the random user
        </h1>
      </div>
      <div>
        <button
          className="rounded-2xl border-2 border-dashed border-white bg-midnightPlum  px-6 py-3 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
          onClick={() => router.push("/dashboard")}
        >
          Go To Dashboard
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
