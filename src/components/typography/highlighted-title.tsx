import React from "react";
import useLastWord from "@/hooks/useLastWord";

type SectionTitleProps = {
	className?: string;
	title: string;
	highlighted: string;
};

function SectionTitle({ className, title, highlighted }: SectionTitleProps) {
	return (
		<h3 className={`${className} text-foreground text-7xl  font-bold text-pretty`}>
			{title}
			<span className="px-2 py-1 bg-primary -rotate-1 mx-2 inline-block">
				<span className="text-foreground rotate-1">{highlighted}</span>
			</span>
		</h3>
	);
}

export default SectionTitle;
