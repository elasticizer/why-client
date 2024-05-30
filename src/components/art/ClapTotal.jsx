import { useAuth } from '../../hooks/use-auth';
import useSWR from 'swr';
import { fetcher } from '@/utils/utils';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ClapTotal({ total, art_id }) {
	const { clapArt, auth } = useAuth();
	const [totalClap, setTotalClap] = useState(total);
	async function updateTotal() {
		try {
			const res = await fetch(`/api/art/${art_id}/clap_total`);
			const data = await res.json();
			//   console.log(data.data.clap_total);
			setTotalClap(data.data.clap_total);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		updateTotal();
	}, [auth, clapArt]);

	//   更新

	return (
		<motion.span
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7 }}
			className="text-zinc-600 font-black -my-6 pl-3">
			已有{totalClap}人贊同
		</motion.span>
	);
}
