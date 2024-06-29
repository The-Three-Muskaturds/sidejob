import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import RegisterForm from "@/features/auth/register-form";

type Props = {};

function RegisterPage({}: Props) {
	return (
		<div className="pt-32  text-3xl">
			<div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
				<div className="flex items-center justify-center py-12">
					<div className="mx-auto grid w-[350px] gap-6">
						<div className="grid gap-2 text-center">
							<h1 className="text-3xl font-bold">Register</h1>
							<p className="text-balance text-muted-foreground">
								Enter your information to create an account
							</p>
						</div>
						<RegisterForm />
					</div>
				</div>
				<div className="hidden bg-muted lg:block">
					<Image
						src="/placeholder.svg"
						alt="Image"
						width="1920"
						height="1080"
						className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
					/>
				</div>
			</div>
		</div>
	);
}

export default RegisterPage;
