// app/api/register/route.ts

import { NextRequest, NextResponse } from "next/server";

import sidejobApi from "@/utils/axios/sidejobApi.instace";

export async function POST(req: NextRequest) {
	try {
		const formData = await req.json();

		console.log(formData); // This will log the form data for debugging purposes

		const axiosResponse = await sidejobApi.post("/auth/register", formData);
		const data = axiosResponse.data;

		return NextResponse.json({ message: "User registered successfully", data });
	} catch (error: any) {
		console.error("Error:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 },
		);
	}
}

export async function GET() {
	return NextResponse.json(
		{ message: "This endpoint only accepts POST requests" },
		{ status: 405 },
	);
}
