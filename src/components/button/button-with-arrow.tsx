import React from "react";

type ButtonWithArrowProps = {
	text: string;
	href: string;
	hexCodeColor: string;
	hexCodeHover: string;
};

function ButtonWithArrow({
	text,
	href,
	hexCodeColor,
	hexCodeHover,
}: ButtonWithArrowProps) {
	return (
		<a
			className={`group relative inline-flex items-center overflow-hidden rounded bg-[${hexCodeColor}] text-white  px-8 py-4 text-lg focus:outline-none focus:ring  hover:bg-[${hexCodeHover}] cursor-pointer`}
			href={href}
		>
			<span className="absolute -end-full transition-all group-hover:end-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="size-5 rtl:rotate-180"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</span>
			<span className="font-medium transition-all group-hover:me-4">
				{text}
			</span>
		</a>
	);
}

export default ButtonWithArrow;
