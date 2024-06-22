import AppPreviewCard from "@/components/card/app-preview-card";
import ButtonWithArrow from "@/components/button/button-with-arrow";
import Hero from "@/components/hero/hero";
import HeroHeader from "@/components/hero/hero-header";
import Particles from "@/components/magicui/particles";
import React from "react";

type Props = {};

function LandingHero({}: Props) {
	return (
		<Hero>
			<>
				<Particles
					className="absolute inset-0"
					quantity={100}
					ease={80}
					refresh
				/>
				<HeroHeader
					title="Your Stress-Free Freelancing Solution"
					subtitle="Sign Up today and simplify your freelancing experience and reclaim your
				peace of mind"
				/>
				<div className="max-w-5xl mx-auto flex justify-center items-center relative z-50">
					<ButtonWithArrow
						text="Sign Up Now!"
						href="#"
						hexCodeColor="#2F80ED"
						hexCodeHover="#3363a2"
					/>
				</div>
				<div className="pt-10">
					<AppPreviewCard text="This is where the app preview will go." />
				</div>
			</>
		</Hero>
	);
}

export default LandingHero;
