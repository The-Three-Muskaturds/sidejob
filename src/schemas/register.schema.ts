import { ZodType, z } from "zod";

type RegisterData = {
	"first_name": string;
	"last_name": string;
	username: string;
	email: string;
	password: string;
	"confirm_password": string;
};

const registerSchema: ZodType<RegisterData> = z
	.object({
		"first_name": z
			.string()
			.min(3, { message: "First name must be at least 3 characters long" })
			.max(50, { message: "First name cannot exceed 50 characters" }),
		"last_name": z
			.string()
			.min(3, { message: "Last name must be at least 3 characters long" })
			.max(50, { message: "Last name cannot exceed 50 characters" }),
		username: z
			.string()
			.min(5, { message: "Username must be at least 5 characters long" })
			.max(18, { message: "Username cannot exceed 18 characters" }),
		email: z.string().email({ message: "Please provide a valid email" }),
		password: z
			.string()
			.min(7, { message: "Password must be at least 7 characters long" })
			.max(32, { message: "Password cannot exceed 32 characters" }),
		"confirm_password": z
			.string()
			.min(7, {
				message: "Confirm password must be at least 7 characters long",
			})
			.max(32, {
				message: "Confirm password cannot exceed 32 characters",
			}),
	})
	.refine((data) => data.password === data["confirm_password"], {
		message: "Passwords must match",
		path: ["confirm-password"],
	});

export default registerSchema;
