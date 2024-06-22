import React from "react";
import SparklesText from "../magicui/sparkles-text";

type HeroHeaderProps = {
	title: string;
	subtitle?: string;
};

function HeroHeader({ title, subtitle }: HeroHeaderProps) {
	return (
		<header className="mx-auto max-w-screen-2xl text-center z-30 relative ">
			<SparklesText text={title} />

			<h3 className="mx-auto mt-4 max-w-4xl text-3xl pb-5 text-pretty">
				{subtitle}
			</h3>
		</header>
	);
}
export default HeroHeader;
