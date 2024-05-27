import useSWR from 'swr';
import FollowBtn from '../(withbehavior)/FollowBtn';
import MsgBtn from '../(withbehavior)/MsgBtn';
import SettingsBtn from '@/components/art/(author)/SettingsBtn';
import { FaPlus } from 'react-icons/fa';
import { FaPenAlt } from 'react-icons/fa';
import { useAuth } from '@/hooks/use-auth';
import MsgBoard from '@/components/art/(msg)/MsgBoard';
import { TbMessageChatbot } from 'react-icons/tb';
import { useState } from 'react';
import Contact from './Contact';
import { fetcher } from '@/utils/utils';

export default function AuthorPage({ id }) {
	const { data, error, isLoading } = useSWR(`/api/art/author/${id}`, fetcher);
	const [open, setOpen] = useState(false);
	const [openMyMsg, setOpenMyMsg] = useState(false);
	const { auth } = useAuth();
	if (error || data?.error) return <div>failed to load</div>;
	if (isLoading)
		return (
			<div className="author-banner w-full flex justify-center items-center">
				loading...
			</div>
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
			{open && auth && (
				<MsgBoard
					memberId={author_id}
					userId={auth?.id}
					name={name}
					img={profile_image_url}
					setOpen={setOpen}></MsgBoard>
			)}
			{openMyMsg && <Contact userId={auth?.id}></Contact>}
			<section className="author-banner w-full flex justify-center items-center">
				<div className="flex flex-row bg-base-100 shadow-xl max-w-[1550px] w-full m-auto p-10 ">
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
						<p className="tracking-widest text-xl font-black text-zinc-400">
							{meta_description}
						</p>
						<div className="flex gap-4">
							{isAccountOwner && (
								<button className="btn">
									<FaPlus className="text-3xl" />
									新增文章
								</button>
							)}
							{isAccountOwner && (
								<>
									<SettingsBtn></SettingsBtn>
									<button className="btn">
										<FaPenAlt className="icon" />
										編輯簡介
									</button>
									<button className="btn font-bold rounded-full">
										我的通知
										<TbMessageChatbot
											className="icon"
											onClick={() => {
												setOpenMyMsg(true);
											}}
										/>
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
				</div>
			</section>
		</>
	);
}
