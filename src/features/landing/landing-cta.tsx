import { AnimatedList } from "@/components/magicui/animated-list";
import FeatureList from "@/components/lists/feature-list";
import HighlightedTitle from "@/components/typography/highlighted-title";
import { Notification } from "@/types/notification";
import NotificationCard from "@/components/notification/notification-card";
import React from "react";

type LandingCtaProps = {
	focalPoints: string[];
	notifications: Notification[];
};

function LandingCta({ focalPoints, notifications }: LandingCtaProps) {
	return (
		<section className="w-full flex flex-col items-center justify-center py-32">
			<div className="p-16 bg-gradient-to-br from-neutral-800 to-stone-700 rounded-3xl grid grid-cols-8 gap-2">
				<div className="col-span-5">
					<HighlightedTitle
						title="Manage Clients Without"
						highlighted="Email Tennis"
					/>
					<FeatureList items={focalPoints} />
				</div>
				<div className="col-span-3 h-[500px] overflow-hidden">
					<AnimatedList>
						{notifications.map((notification, index) => (
							<NotificationCard
								key={index}
								{...notification}
							/>
						))}
					</AnimatedList>
				</div>
			</div>
		</section>
	);
}

export default LandingCta;
