import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased mx-auto w-full",
					fontSans.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main className="max-w-screen-2xl  mx-auto">
						{/* Todo Turn this Navigation into a reusable component. */}
						<header className=" w-full h-24 fixed z-50 py-4 max-w-screen-2xl">
							<nav className="bg-card h-full mx-auto rounded-full shadow-lg flex items-center px-12 justify-between">
								<div>
									<h3 className="text-foreground text-2xl font-bold">
										Side
										<span className="text-primary">Hustle</span>
									</h3>
								</div>
								<ul className="flex gap-4 items-center">
									<li className="font-semibold text-foreground hover:text-primary transition-colors ease-in-out duration-300">
										<Link href="/login">Login</Link>
									</li>
									<li className="font-semibold text-foreground hover:text-primary transition-colors ease-in-out duration-300">
										<Link href="/register">Register</Link>
									</li>
									<li>
										<div className="">
											<ThemeToggle />
										</div>
									</li>
								</ul>
							</nav>
						</header>
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
