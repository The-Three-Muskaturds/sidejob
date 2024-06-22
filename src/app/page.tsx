"use client";

import { Feature } from "@/types/feature";
import LandingCta from "@/features/landing/landing-cta";
import LandingFeatures from "@/features/landing/landing-features";
import LandingHero from "@/features/landing/landing-hero";

// Todo: Strip everything out into reusable components.
export default function Home() {
	const features: Feature[] = [
		{
			className: "col-span-6",
			media: undefined,
			title: "Send Your Clients A Limited Access Link",
			subtitle:
				"No need for clients to register, send them their access link and they cant view your progress",
		},
		{
			className: "col-span-3",
			media: undefined,
			title: "Setup The Project",
			subtitle:
				"Defined the project length, milestones, and invite all involved",
		},
		{
			className: "col-span-3",
			media: undefined,
			title: "Track Progress & Revisions",
			subtitle:
				"Have your client effortlessly submit revisions/feedback, view when milestones are reached and payment is needed",
		},
		{
			className: "col-span-2",
			media: undefined,
			title: "Keep Client Accountable",
			subtitle:
				"Future work is locked until the client has reviewed and approve the current milestone.",
		},
		{
			className: "col-span-2",
			media: undefined,
			title: "Recieve Payment First",
			subtitle:
				"Stop continuing projects without recieving payment first. A milestone can't be unlocked until payment is received.",
		},
		{
			className: "col-span-2",
			media: undefined,
			title: "Complete More Projects",
			subtitle:
				"Keep your projects organized and moving, allowing you to bring on more work.",
		},
	];

	const notifications = [
		{
			title: "Strickland Propane",
			date: "2024-06-01",
			desc: "Project kickoff",
		},
		{
			title: "Average Joes Gymnasium",
			date: "2024-06-05",
			desc: "First revision milestone reached",
		},
		{
			title: "Globo Gym",
			date: "2024-06-10",
			desc: "Final payment received",
		},
		{
			title: "Bob's Burgers",
			date: "2024-06-15",
			desc: "Pending revision's to review.",
		},
		{
			title: "Sneaky Pete's Pizza",
			date: "2024-06-20",
			desc: "Final milestone reached, awaiting final payment.",
		},
		{
			title: "Snickersnack International",
			date: "2024-06-25",
			desc: "Project completed.",
		},
		{
			title: "Space Cowboys Ventures",
			date: "2024-06-30",
			desc: "Client access token has expired.",
		},
	];

	const focalPoints = [
		"Connect With Clients",
		"Manage Multiple Projects",
		"Streamline The Revision Process",
		"Boost Your Productivity",
	];

	return (
		<>
			<LandingHero />
			<LandingCta
				focalPoints={focalPoints}
				notifications={notifications}
			/>
			<LandingFeatures features={features} />
		</>
	);
}
