import { useEffect, useState } from "react";

import { letterColors } from "@/lib/letter-colors";

type LetterColors = typeof letterColors;

const useLetterColor = (letter: string) => {
	const [color, setColor] = useState("#CCCCCC"); 

	useEffect(() => {
		if (
			letter &&
			Object.prototype.hasOwnProperty.call(letterColors, letter.toUpperCase())
		) {
			const key = letter.toUpperCase() as keyof LetterColors;
			setColor(letterColors[key]);
		} else {
			setColor("#CCCCCC"); 
		}
	}, [letter]);

	return color;
};

export default useLetterColor;
