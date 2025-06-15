import { z } from "zod";

const contactSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().min(1, { message: "Email address is required" }).email(),
    phone: z.string().min(1, { message: "Phone Number is required" }),
    subject: z.string().min(1, { message: "Subject is required" }),
    message: z.string().optional(),
  });


type contactType = z.infer<typeof contactSchema>;

export { contactSchema, type contactType };