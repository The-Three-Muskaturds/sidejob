import { BorderBeam } from "../magicui/border-beam";
import HeroHeader from "./hero-header";
import Particles from "../magicui/particles";
import { ReactElement } from "react";
import ShinyButton from "../magicui/shiny-button";

type HeroProps = {
	children: ReactElement;
};

function Hero({ children }: HeroProps) {
	return (
		<section className="relative text-foreground">
			<div className="pt-64">{children}</div>
		</section>
	);
}

export default Hero;