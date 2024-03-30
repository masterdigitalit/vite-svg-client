import { RefObject } from "react";

interface IELEMENT {
	el: RefObject<HTMLParagraphElement>;
	text: string;
	speed: number;
}

export default function WritingTextEffect({ el, speed, text }: IELEMENT) {
	// (el, speed, text);

	let currentIndex = 0;
	const timerId = setInterval(typeText, speed);
	function typeText() {
		("called");
		(currentIndex, text.charAt(currentIndex));

		if (currentIndex < text.length) {
			el.current!.innerHTML += text.charAt(currentIndex);
			currentIndex++;
		} else {
			clearInterval(timerId);
		}
	}
}
