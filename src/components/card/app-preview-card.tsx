import { BorderBeam } from "../magicui/border-beam";
import Image from "next/image";
import React from "react";
import image from "@/assets/img/img1.jpg";

type AppPreviewCardProps = {
	text: string;
};

function AppPreviewCard({ text }: AppPreviewCardProps) {
	return (
		<>
			{/* from-[#56CCF2]  */}
			<div className="max-w-6xl mx-auto absolute inset-0 bg-gradient-to-t from-primary from-5% via-transparent via-60% to-transparent blur-3xl rounded-xl z-0"></div>
			<div className="relative max-w-6xl z-10 mx-auto ">
				{/* <h3 className="text-4xl">{text}</h3> */}
				<figure className=" relative z-[1] max-w-full  rounded-b-lg ">
					<div className="relative flex items-center  bg-black rounded-t-lg py-2 px-24">
						<div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
							<span className="size-2 bg-neutral-600 rounded-full"></span>
							<span className="size-2 bg-neutral-600 rounded-full"></span>
							<span className="size-2 bg-neutral-600 rounded-full"></span>
						</div>
						<div className="flex justify-center items-center size-full bg-neutral-700 text-sm text-gray-400 rounded-sm sm:text-[.5rem]">
							www.sidehustle.com
						</div>
					</div>

					<div className="bg-gray-800 rounded-b-lg">
						<Image
							className="max-w-full h-auto rounded-b-lg"
							src={image}
							alt="Image Description"
						/>
					</div>
				</figure>
			</div>
		</>
	);
}

export default AppPreviewCard;
// #ffd90075
