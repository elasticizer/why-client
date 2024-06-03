import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoCaretUp } from 'react-icons/io5';
import clsx from 'clsx';
import useSWR from 'swr';
import { fetcher } from '@/utils/utils';

const variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 300, damping: 24 }
	},
	closed: {
		opacity: 0,
		y: 20,
		transition: { duration: 0.2 }
	}
};

const FieldGroup = () => {
	const { data, error, isLoading } = useSWR('/api/art/group', fetcher);
	const [isOpen, setIsOpen] = useState(false);

	if (error || data?.error) return <div>failed to load</div>;
	if (isLoading)
		return (
			<div className="flex justify-center items-center gap-5 hover:cursor-pointer transition hover:bg-orange-100 rounded-full text-center">
				<h2 className="text-2xl my-7">whyschool Blog</h2>
				<IoCaretUp className="icon" />
			</div>
		);

	return (
		<>
			<motion.nav
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				className="w-full text-center">
				<motion.div
					className="flex justify-center items-center gap-5 hover:cursor-pointer transition hover:bg-orange-100 rounded-full"
					onClick={() => setIsOpen(!isOpen)}
					whileTap={{ scale: 0.97 }}>
					<h2 className="text-2xl my-7">whyschool Blog</h2>
					<motion.div
						variants={{
							open: { rotate: -180 },
							closed: { rotate: 0 }
						}}
						transition={{ duration: 0.2 }}
						style={{ originY: 0.55 }}>
						<IoCaretUp className="icon" />
					</motion.div>
				</motion.div>

				<motion.ul
					className={clsx(
						'grid grid-cols-2 gap-2 items-center field-group mt-4',
						isOpen && 'cursor-auto',
						!isOpen && 'cursor-none'
					)}
					variants={{
						open: {
							transition: {
								type: 'spring',
								bounce: 0,
								duration: 0.7,
								delayChildren: 0.3,
								staggerChildren: 0.05
							},
							scale: 1,
							y: 0
						}
						// closed: {
						//   transition: {
						//     type: "spring",
						//     bounce: 0,
						//     duration: 0.3,
						//   },
						//   scale: 0,
						//   y: "-30%",
						// },
					}}>
					{data.data.map((v, i) => {
						return (
							<motion.a
								key={i}
								variants={variants}
								className={clsx(
									'w-full py-6 rounded-full bg-orange-100 font-black text-xl text-zinc-700',
									!isOpen && 'hidden'
								)}
								href="/blog/art-field">
								{v.title}
							</motion.a>
						);
					})}
				</motion.ul>
			</motion.nav>
		</>
	);
};

export default FieldGroup;
