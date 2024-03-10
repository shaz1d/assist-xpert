import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, { message: "Name is Required" }),
  email: z.string().email({ message: "An email is required" }),
  phone: z.string(),
  service: z.string(),
  message: z.string(),
});
