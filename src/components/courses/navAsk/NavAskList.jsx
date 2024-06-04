import React, { useState, useRef, useEffect } from 'react';
import { FcAdvertising } from 'react-icons/fc';
import CoNavAsk from './CoNavAsk';
import { useSession } from '@/contexts/session';
import Link from 'next/link';


export default function NavAskList() {

	const [review, setReview] = useState([]);
	const [sendreview, setSendreview] = useState('');
	const user = useSession();

	const inputEl = useRef()

	useEffect(() => {
		const fetchData = async () => {
			const url = `/api/review`;
			try {
				const res = await fetch(url);
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				const viewdata = await res.json();
				console.log(viewdata);
				setReview(viewdata);
			} catch (e) {
				console.error(e);
				setReview([]);
			}
		};
		fetchData();
	}, []);

	const submitForm = async e => {
		e.preventDefault();
		const form = e.currentTarget;
		const body = new URLSearchParams(new FormData(form));
		try {
			const res = await fetch(`/api/review/insert`, { method: 'POST', body });
			const { data } = await res.json();
			console.log(data);
			console.log('新增留言成功');
			setReview([data, ...review])

		} catch (error) {
			console.error("新增留言失敗", error);
		}
	};


	if (review.length === 0) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<div className=" px-3 py-3  w-full inline-flex justify-between  items-center space-x-80 ">
				<div className=" text-neutral-800 text-2xl font-semibold font-['Inter'] leading-loose">
					您的建議將幫助我們更好地理解學員需求，持續改進課程內容！
				</div>
			</div>
			
			<div className="w-full  ">
			</div>
			{
				user && review.every(item => item.LearnerSN !== user.SN) ?
					<div className="w-full pl-4 border items-center px-2 py-3 shadow   rounded-lg justify-start gap-2 inline-flex my-4">
						<div className=" w-12 h-12  bg-white/opacity-0 rounded-3xl  border-black/opacity-5 justify-center items-center inline-flex">
							<img
								className="inline-block rounded-full"
								src={user.Icon}
								alt="Image Description"
							/>
						</div>
						<form className="flex flex-col w-full" onSubmit={submitForm}>
							<div>{user.FirstName}</div>
							<div className="flex gap-2 w-full">
								<input
									type="text"
									name="content"
									className=" peer py-3 px-4 ps-5 block w-full bg-gray-200/55 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									placeholder="在此留下對課程的評論吧"
									ref={inputEl}
								/>
								<button
									type="submit"
									className="rounded-lg px-2 py-1 inline-flex flex-shrink-0 justify-center items-center size-18 text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
								>
									送出
								</button>
							</div>
						</form>
					</div>
					:
					Boolean(user) || <div className=" py-2  border items-center w-full shadow  bg-green-300/25 rounded-lg justify-center inline-flex my-4">
						<FcAdvertising className=" w-10 h-10" />

						<Link
							href="/signin"
							className=" text-teal-500 text-sm font-semibold font-['Inter'] underline leading-snug">
							請先登入或進行註冊後才可以留言喔！
						</Link>
					</div>
			}
			{/* <CoNavAsk /> */}
			{/* 學生問題 */}
			{review.map((v, i) => {
				return (
					<CoNavAsk
						data={v}
						key={i}
						content={v.Content}
						whenCreated={v.WhenCreated}
						nickname={v.Nickname}
						res={v.response}
						learnerSN={v.LearnerSN}
						SN={v.SN}
						setSendreview={setSendreview}
						firstname={v.FirstName}
					/>
				);
			})}


		</>
	);
}
