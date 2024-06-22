import { CircleUser } from "lucide-react";
import Image from "next/image";
import { Notification } from "@/types/notification";
import React from "react";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import useLetterColor from "@/hooks/useLetterColor";

function NotificationCard({ title, date, desc }: Notification) {
	const letterColor = useLetterColor(title[0]);
	const formattedDate = useFormattedDate(date);

	return (
		<figure
			className={
				"relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-white box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark: box-shadow:0_-20px_80px_-20px_#ffffff1f_inset"
			}
		>
			<div className="flex flex-row items-center gap-3">
				<div
					className={`flex h-10 w-10 items-center justify-center rounded-full`}
					style={{backgroundColor: letterColor}}
				>
					<p className="text-white font-semibold">{title[0]}</p>
				</div>
				<div className="flex flex-col overflow-hidden">
					<figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
						<span className="text-sm sm:text-lg">{title}</span>
						<span className="mx-1">·</span>
						<span className="text-xs text-gray-500">{formattedDate}</span>
					</figcaption>
					<p className="text-sm font-normal dark:text-white/60">{desc}</p>
				</div>
			</div>
		</figure>
	);
}

export default NotificationCard;
