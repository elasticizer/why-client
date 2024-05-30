import React, { useEffect, useRef, useState } from 'react';
import Plyr from 'plyr';

export default function Player({ videoSrc, videoType }) {
	const videoRef = useRef(null);
	const [interactionDetected, setInteractionDetected] = useState(false);

	useEffect(() => {
		if (!interactionDetected) {
			const handleInteraction = () => {
				setInteractionDetected(true);
			};

			// Listen for a user interaction event
			document.addEventListener('click', handleInteraction);

			return () => {
				document.removeEventListener('click', handleInteraction);
			};
		}
	}, [interactionDetected]);

	useEffect(() => {
		if (typeof window === 'undefined' || !videoRef.current) return;
		const playerInstance = new Plyr(videoRef.current);

		// Trigger autoplay if interaction is detected
		if (interactionDetected) {
			videoRef.current.autoplay = true;
		}

		return () => {
			playerInstance.destroy();
		};
	}, [interactionDetected]);

	return (
		<video
			className="w-full h-auto"
			ref={videoRef}
			controls
		>
			<source
				src={videoSrc}
				type={videoType || 'video/mp4'}
			/>
		</video>
	);
}
