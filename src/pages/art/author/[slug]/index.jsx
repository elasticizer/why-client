import { useRouter } from 'next/router';
import LikeArtCardGroup from '../../../../components/art/(author)/LikeArtCardGroup';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import AuthorPage from '../../../../components/art/(author)/AuthorPage';
import CheckBlocked from '../../../../components/art/(author)/CheckBlocked';
import { AnimatePresence } from 'framer-motion';

export default function Index({}) {
	const router = useRouter();
	const [ready, setReady] = useState(false);
	const [tab, setTab] = useState('released');
	const id = router.query.slug;

	useEffect(() => {
		if (router.isReady) {
			setReady(true);
		}
	}, [router.isReady]);

	if (!ready) {
		return (
			<>
				<div className="author-banner w-full flex justify-center items-center"></div>
				<section className="flex flex-row justify-center mt-5">
					<section className="w-[300px]"></section>
					<section className="max-w-[1250px]"></section>
				</section>
			</>
		);
	}

	if (ready)
		return (
			<>
				<AnimatePresence mode="wait">
					<AuthorPage id={id}></AuthorPage>
				</AnimatePresence>
				<section className="flex flex-row justify-center mt-5">
					<section className="w-[300px]">
						<ul className="menu rounded-box w-full text-2xl">
							<li
								onClick={() => {
									setTab('released');
								}}>
								<a
									className={clsx(
										'h-20 flex items-center author-tab',
										tab === 'released' && 'author-tab-active'
									)}>
									發布的文章
								</a>
							</li>
							<li
								onClick={() => {
									setTab('clapped');
								}}>
								<a
									className={clsx(
										'h-20 flex items-center author-tab',
										tab === 'clapped' && 'author-tab-active'
									)}>
									贊同的文章
								</a>
							</li>
							<li
								onClick={() => {
									setTab('liked');
								}}>
								<a
									className={clsx(
										'h-20 flex items-center author-tab',
										tab === 'liked' && 'author-tab-active'
									)}>
									收藏的文章
								</a>
							</li>
							<li
								onClick={() => {
									setTab('follow');
								}}>
								<a
									className={clsx(
										'h-20 flex items-center author-tab',
										tab === 'follow' && 'author-tab-active'
									)}>
									追蹤的人
								</a>
							</li>
						</ul>
					</section>
					<section className="max-w-[1250px]">
						<CheckBlocked
							tab={tab}
							id={id}></CheckBlocked>
					</section>
				</section>
			</>
		);
}
