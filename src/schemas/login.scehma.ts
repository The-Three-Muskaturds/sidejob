import { ZodType, z } from "zod";

type Login = {
	username: string;
	password: string;
};

const loginSchema: ZodType<Login> = z.object({
	username: z.string().min(1, { message: "Username cannot be empty" }),
	password: z.string().min(1, { message: "Password cannot be empty" }),
});

export default loginSchema;
