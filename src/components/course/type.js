import React, { useState, useEffect } from 'react';

export default function Typewriter({ text, typingSpeed }) {
	const [displayText, setDisplayText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (currentIndex < text.length) {
				setDisplayText(prevText => prevText + text[currentIndex]);
				setCurrentIndex(prevIndex => prevIndex + 1);
			} else {
				clearInterval(interval);
			}
		}, typingSpeed);

		return () => {
			clearInterval(interval);
		};
	}, [text, typingSpeed, currentIndex]);

	return <div>{displayText}</div>;
}


