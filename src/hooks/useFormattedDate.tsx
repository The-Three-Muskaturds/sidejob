import { useMemo } from "react";

export function useFormattedDate(dateString: string): string {
	const formattedDate = useMemo(() => {
		const date = new Date(dateString);
		const month = date.toLocaleString("default", { month: "short" });
		const day = date.getDate();
		return `${month} ${day}`;
	}, [dateString]);

	return formattedDate;
}

// test