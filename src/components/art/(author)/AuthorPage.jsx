import useSWR from 'swr';
import FollowBtn from '../(withbehavior)/FollowBtn';
import MsgBtn from '../(withbehavior)/MsgBtn';
import SettingsBtn from '@/components/art/(author)/SettingsBtn';
import { FaPlus } from 'react-icons/fa';
import { useAuth } from '@/hooks/use-auth';
import MsgBoard from '@/components/art/(msg)/MsgBoard';
import { TbMessageChatbot } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import Contact from './Contact';
import { fetcher } from '@/utils/utils';
import EditIntroBtn from './EditIntroBtn';
import MsgBoardImcoming from '../(msg)/MsgBoardImcoming';
import { motion } from 'framer-motion';

export default function AuthorPage({ id }) {
	const { data, error, isLoading } = useSWR(`/api/art/author/${id}`, fetcher);
	const [showedIntro, setShowedIntro] = useState('');
	const [open, setOpen] = useState(false);
	const [openConversation, setOpenConversation] = useState(false);
	const [openMyMsg, setOpenMyMsg] = useState(false);
	const { auth } = useAuth();
	if (error || data?.error) return <div>failed to load</div>;
	if (isLoading)
		return (
			<div className="author-banner w-full flex justify-center items-center"></div>
		);

	const {
		sn,
		id: author_id,
		name,
		profile_image_url,
		meta_description,
		links
	} = data.data;

	const isAccountOwner = author_id === auth?.id;
	return (
		<>
			<section className="author-banner w-full flex justify-center items-center">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ type: 'spring' }}
					className="flex flex-row bg-base-100 shadow-xl max-w-[1550px] w-full m-auto p-10 ">
					<div className="rounded-2xl overflow-hidden h-48 w-48 ">
						<img
							src={profile_image_url}
							alt="img"
							className="h-48 w-48 "
						/>
					</div>
					<div className="card-body items-stretch max-w-[calc(100%-17rem)]">
						<h2 className="card-title tracking-widest text-2xl font-black">
							{name}
						</h2>
						<p className="tracking-widest text-xl text-zinc-500">
							{showedIntro || meta_description}
						</p>
						<div className="flex gap-4">
							{isAccountOwner && (
								<a
									className="btn"
									href="/art/write"
									target="_blank">
									<FaPlus className="text-3xl" />
									新增文章
								</a>
							)}
							{isAccountOwner && (
								<>
									<SettingsBtn userId={auth?.id}></SettingsBtn>
									<EditIntroBtn
										author_id={author_id}
										meta_description={meta_description}
										setShowedIntro={setShowedIntro}></EditIntroBtn>

									<button
										className="btn font-bold rounded-full"
										onClick={() => {
											setOpenMyMsg(true);
										}}>
										我的通知
										<TbMessageChatbot className="icon" />
									</button>
								</>
							)}
							{!isAccountOwner && (
								<>
									<FollowBtn
										large={true}
										target={author_id}></FollowBtn>
									<MsgBtn
										target={author_id}
										user={auth?.id}
										setOpen={setOpen}></MsgBtn>
								</>
							)}
						</div>
					</div>
				</motion.div>
			</section>
			<div className="fixed left-48 bottom-10 flex flex-row gap-10 z-50 items-end">
				{openMyMsg && auth && (
					<Contact
						userId={auth?.id}
						setOpenMyMsg={setOpenMyMsg}
						setOpenConversation={setOpenConversation}></Contact>
				)}
				{open && auth && (
					<MsgBoard
						memberId={author_id}
						userId={auth?.id}
						name={name}
						img={profile_image_url}
						setOpen={setOpen}></MsgBoard>
				)}
				{openConversation && auth && (
					<MsgBoardImcoming
						roomId={openConversation}
						userId={auth?.id}
						setOpenConversation={setOpenConversation}></MsgBoardImcoming>
				)}
			</div>
		</>
	);
}
