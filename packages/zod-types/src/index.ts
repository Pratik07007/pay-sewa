import { z } from "zod";

export const signUpInputs = z.object({
  name: z.string(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one upper case alphabet",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[! @ # $ % ^ & * ( ) - _ + = { }  | \ ; : " ' , . / ? < > ~ ]/, {
      message: "Password must contain at least one special character",
    }),
});

export type signInInputsTypes = z.infer<typeof signUpInputs>;  
 