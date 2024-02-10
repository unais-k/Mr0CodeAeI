import { z } from "zod";

const catchValue = {} as never;
const toastSchema = z.object({
  icon: z.string(),
  title: z.string(),
  titleColor:z.string(),
  info: z.string(),
  color: z.string(),
  border: z.string()
});
export const configSchema = z.object({
  settings: z
    .object({ name: z.string().optional(), tag: z.string().optional() })
    .optional(),
  text: z.string(),
  icon: z.string(),
  toast: toastSchema
});

export type Config = z.infer<typeof configSchema>;
