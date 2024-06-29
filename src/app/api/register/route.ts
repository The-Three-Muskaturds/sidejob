import { NextRequest, NextResponse } from "next/server";

import sidejobApi from "@/utils/axios/sidejobApi.instace";

export async function POST(req: NextRequest) {
	try {
		const formData = await req.json();
		const axiosResponse = await sidejobApi.post("/auth/register", formData);
		const data = axiosResponse.data;

		return NextResponse.json({ message: "User registered successfully", data });
	} catch (error: any) {
		if (error.response) {
			// Log only relevant parts of the error
			console.error("Error response data:", error.response.data);
			console.error("Error response status:", error.response.status);

			// Return a clear error message
			return NextResponse.json(
				{ error: error.response.data.error || "An error occurred" },
				{ status: error.response.status },
			);
		}

		console.error("Internal Server Error:", error.message);
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
