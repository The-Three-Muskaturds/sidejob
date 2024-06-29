"use client";

import { Form, FormField, FormLabel, FormMessage } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios";
import registerSchema from "@/schemas/register.schema";
import sidejobServer from "@/utils/axios/sidejobSever.instance";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormValues = z.infer<typeof registerSchema>;

function RegisterForm() {
	const form = useForm<FormValues>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			first_name: "",
			last_name: "",
			username: "",
			email: "",
			password: "",
			confirm_password: "",
		},
	});

	const onSubmit = async (formData: FormValues) => {
		try {
			console.log("FORM DATA: ", formData);
			const response = await axios.post("/api/register", formData);
			console.log(response);

		} catch (error: any) {
			console.log("ON SUBMIT ERROR: ", error.response.data.error);
			if (error.response.data.error === "User already exists") {
				form.setError("username", {
					type: "api",
					message: error.response.data.error,
				});
			}
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8"
			>
				<div className="grid gap-4">
					<div className="grid grid-cols-2 gap-4">
						<FormField
							control={form.control}
							name="first_name"
							render={({ field }) => (
								<div>
									<FormLabel>First Name</FormLabel>
									<Input
										id="first_name"
										placeholder="John"
										{...field}
									/>
									<FormMessage />
								</div>
							)}
						/>
						<FormField
							control={form.control}
							name="last_name"
							render={({ field }) => (
								<div>
									<FormLabel>Last Name</FormLabel>
									<Input
										id="last_name"
										placeholder="Doe"
										{...field}
									/>
									<FormMessage />
								</div>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<div>
								<FormLabel>Username</FormLabel>
								<Input
									id="username"
									placeholder="Username"
									{...field}
								/>
								<FormMessage />
							</div>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<div>
								<FormLabel>Email</FormLabel>
								<Input
									id="email"
									type="email"
									placeholder="john@doe.com"
									{...field}
								/>
								<FormMessage />
							</div>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<div>
								<FormLabel>Password</FormLabel>
								<Input
									id="password"
									type="password"
									{...field}
								/>
								<FormMessage />
							</div>
						)}
					/>
					<FormField
						control={form.control}
						name="confirm_password"
						render={({ field }) => (
							<div>
								<FormLabel>Confirm Password</FormLabel>
								<Input
									id="confirm-password"
									type="password"
									{...field}
								/>
								<FormMessage />
							</div>
						)}
					/>
					<Button
						type="submit"
						className="w-full"
					>
						Create an account
					</Button>
				</div>
				<div className="mt-4 text-center text-sm">
					Already have an account?{" "}
					<Link
						href="/login"
						className="underline"
					>
						Sign in
					</Link>
				</div>
			</form>
		</Form>
	);
}

export default RegisterForm;
