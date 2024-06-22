import { useEffect, useState } from "react";

function useLastWord(title: string): [string, string] {
	const [lastWord, setLastWord] = useState<string>("");
	const [newTitle, setNewTitle] = useState<string>("");

	useEffect(() => {
		const words = title.split(" ");
		const newLastWord = words[words.length - 1];
		setLastWord(newLastWord);
		const newTitle = words.slice(0, -1).join(" ");
		setNewTitle(newTitle);
	}, [title]);

	return [newTitle, lastWord];
}

export default useLastWord;
