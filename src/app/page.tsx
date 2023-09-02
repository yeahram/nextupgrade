"use client";

import Image from "next/image";
import { useStore } from "./store";
export default function Home() {
  const { count, setCount } = useStore();
  return (
    <>
      <p>{count}</p>
      <button onClick={setCount}>+</button>
    </>
  );
}
