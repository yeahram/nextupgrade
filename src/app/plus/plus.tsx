"use client";
import { yeramStyle } from "./style";
import Image from "next/image";
import { useStore } from "./store";

export default function Plus() {
  const { count, setCount } = useStore();
  return (
    <div className={`${yeramStyle} text-blue-500`}>
      <p>{count}</p>
      <button onClick={setCount}>+</button>
    </div>
  );
}
