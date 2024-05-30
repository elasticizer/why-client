import ArtCardGroup from '@/components/art/ArtCardGroup';
import RightSearch from '@/components/art/RightSearch';
import { useLoader } from '@/hooks/use-loader';
import { AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useEffect } from 'react';
export default function Index() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	return (
		<>
			<AnimatePresence mode="wait">
				<section className="flex flex-row justify-center mt-5">
					<div className="w-2/3">
						<div className="mx-2 card-group">
							<ArtCardGroup></ArtCardGroup>
						</div>
					</div>
					<RightSearch></RightSearch>
				</section>
			</AnimatePresence>
		</>
	);
}
