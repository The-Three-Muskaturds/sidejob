import React from "react";

type FeatureListProps = {
	items: string[];
};

function FeatureList({ items }: FeatureListProps) {
	return (
		<ul className="text-gray-400 font-semibold text-pretty text-4xl py-12 flex flex-col gap-x-4 gap-y-12">
			{items.map((item, index) => (
				<li
					key={index}
					className="hover:text-foreground transition-all ease-out duration-300 "
				>
					<p className="transition-all ease-out duration-300 border-b-8 border-transparent hover:border-blue-500 border-dashed inline-flex">
						{item}
					</p>
				</li>
			))}
		</ul>
	);
}

export default FeatureList;
