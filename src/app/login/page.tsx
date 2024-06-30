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
import { LoginForm } from "@/features/auth/login-form";

type Props = {};

function LoginPage({}: Props) {
	return (
		<div className="pt-32 flex justify-center items-center h-[70vh]">
			<LoginForm />
		</div>
	);
}

export default LoginPage;
