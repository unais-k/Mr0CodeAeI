import { z } from "zod";

const catchValue = {} as never;
const toastSchema = z.object({
  
});
export const configSchema = z.object({
  // settings: z
  //   .object({ name: z.string().optional(), tag: z.string().optional() })
  //   .optional(),
  // text: z.string(),
  // icon: z.string(),
  id:z.number(),
  icon: z.string(),
  title: z.string(),
  titleColor:z.string(),
  info: z.string(),
  color: z.string(),
  border: z.string()
});

export type Config = z.infer<typeof configSchema>;
