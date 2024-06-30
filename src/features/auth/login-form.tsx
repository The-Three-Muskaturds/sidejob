"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Form, FormField, FormLabel, FormMessage } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios";
import loginSchema from "@/schemas/login.scehma";
import sidejobApi from "@/utils/axios/sidejobApi.instace";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
	const form = useForm<FormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	const onSubmit = async (formData: FormValues) => {
		try {
			const response = await sidejobApi.post("/auth/login", formData);
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
		<Card className="w-full max-w-3xl mx-auto">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<CardHeader>
						<CardTitle className="text-2xl">Login</CardTitle>
						<CardDescription>
							Enter your email below to login to your account.
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
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
					</CardContent>
					<CardFooter className="flex flex-col">
						<Button
							type="submit"
							className="w-full"
						>
							Login
						</Button>
						<div className="mt-4 text-center text-sm">
							Don't have an account?{" "}
							<Link
								href="/register"
								className="underline"
							>
								Sign in
							</Link>
						</div>
					</CardFooter>
				</form>
			</Form>
		</Card>
	);
}
