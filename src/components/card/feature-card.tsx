import { Feature } from "@/types/feature";
import React from "react";

function FeatureCard({
	className,
	index,
	media,
	title,
	subtitle,
}: Feature) {
	return (
		<div className={`${className}  rounded-3xl flex flex-col overflow-hidden`}>
			<div className="relative flex justify-center items-center bg-gradient-to-br from-neutral-800 to-stone-700 ">
				<div className="text-white rounded-full h-20 w-20 border-2 flex justify-center items-center font-bold text-2xl absolute top-5 left-5">
					0{index}
				</div>
				<div className="py-32">
					{/* Eventually an image/animation/video will go here */}
					<h3 className="text-center text-4xl font-bold text-white">
						Preview of this apps feature.
					</h3>
				</div>
			</div>
			<div className="bg-neutral-800 p-8 flex-1 flex flex-col justify-between ">
				<div>
					<h3 className="text-3xl font-semibold text-white">{title}</h3>
					<p className="text-white text-xl py-4">{subtitle}</p>
				</div>
				{/* This empty div will push the content to the bottom */}
				<div className="flex-grow"></div>
			</div>
		</div>
	);
}

export default FeatureCard;
