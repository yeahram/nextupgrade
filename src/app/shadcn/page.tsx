"use client";

import { yeramStyle } from "./style";

import { useRouter } from "next/navigation";

const Shadcn = () => {
  const router = useRouter();

  return (
    <div className={yeramStyle}>
      <div
        className="w-52 rounded-sm border m-5 hover:cursor-pointer"
        onClick={() => router.push("/shadcn/button")}
      >
        button
      </div>
      <div
        className="w-52 rounded-sm border m-5 hover:cursor-pointer"
        onClick={() => router.push("/shadcn/card")}
      >
        card
      </div>
      <div
        className="w-52 rounded-sm border m-5 hover:cursor-pointer"
        onClick={() => router.push("/shadcn/alertModal")}
      >
        alert Dialog
      </div>
    </div>
  );
};
export default Shadcn;
