import { Feature } from "@/types/feature";
import FeatureCard from "@/components/card/feature-card";
import HighlightedTitle from "@/components/typography/highlighted-title";
import React from "react";

type LandingFeaturesProps = {
	features: Feature[];
};

function LandingFeatures({ features }: LandingFeaturesProps) {
	return (
		<section className="w-full py-16">
			<HighlightedTitle
				className="text-center pb-16"
				title="Everything To Manage Your Project In One "
				highlighted="Place"
			/>
			<div className="grid grid-cols-6 gap-8">
				{features.map((feature, index) => (
					<FeatureCard
						key={index}
						className={feature.className}
						index={index + 1}
						title={feature.title}
						subtitle={feature.subtitle}
					/>
				))}
			</div>
		</section>
	);
}

export default LandingFeatures;
