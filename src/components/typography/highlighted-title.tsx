import React from "react";
import useLastWord from "@/hooks/useLastWord";

type SectionTitleProps = {
	className?: string;
	title: string;
	highlighted: string;
};

function SectionTitle({ className, title, highlighted }: SectionTitleProps) {
	return (
		<h3 className={`${className} text-white text-7xl  font-bold text-pretty`}>
			{title}
			<span className="px-2 py-1 bg-blue-500 -rotate-1 mx-2 inline-block">
				<span className="text-white rotate-1">{highlighted}</span>
			</span>
		</h3>
	);
}

export default SectionTitle;
