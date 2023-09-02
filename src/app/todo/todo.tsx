"use client";
import { yeramStyle } from "./style";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useStore } from "./store";

interface DataType {
  input: string;
}
export default function Todo() {
  const { push, setPush } = useStore(); //react hook form 을 이용함으로 써 주석 처리

  //react hook form 타입지정 꼭해주기!
  const { handleSubmit, register } = useForm<DataType>();

  const onSubmit = (data: DataType) => {
    setPush(data.input);
    console.log(data);
  };
  return (
    <div className={`${yeramStyle} text-blue-500`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("input")}
          placeholder="입력해주세요!!"
          className="w-50 border"
        ></input>
        <button type="submit" className="w-20 border">
          +
        </button>
      </form>
    </div>
  );
}
