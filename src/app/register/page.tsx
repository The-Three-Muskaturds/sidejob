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
			<RegisterForm />
		</div>
	);
}

export default RegisterPage;
