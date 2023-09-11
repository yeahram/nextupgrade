import * as z from "zod";

export const Schema = z.object({
  //age: z.number().optional(), // ? 물음표를 넣어서 선택사항으로 만듬
  inputTodo: z.string().min(5, { message: "다섯자 이상으로 적어주세요" }),
});
