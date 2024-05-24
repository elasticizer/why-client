import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { useSession } from '@/contexts/session';

export default function ProfileCard() {
	const [sessionInfor, setSessionInfor] = useState('');
	const [datauserCourse, setDatauserCourse] = useState('');
	const [datauserUploadCourse, setDatauserUploadCourse] = useState('');

	const session = useSession();
	useEffect(() => {
		if (session) {
			setSessionInfor(session);
			const handleData = async () => {
				const res = await fetch('/api/learner/profileCard', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						SN: session.SN
					})
				})
					.then(r => r.json())
					.catch(err => err);
				setDatauserCourse(res.results.userCourse.Total);
				setDatauserUploadCourse(res.results.userUploadCourse.Total);
			};
			handleData();
		}
	}, [session]);

	return (
		<div className="w-full rounded-lg overflow-hidden flex flex-col mt-10 ring-1 ring-gray-200 shadow sm:flex-row sm:rounded-none sm:ring-0 sm:shadow-none sm:overflow-visible">
			<div className="bg-amber-500 flex flex-col items-center p-5	sm:me-3 md:me-5 sm:rounded-lg sm:ring-1 ring-gray-100 sm:shadow sm:w-1/2 md:py-10">
				<div className="w-16 h-16 rounded-full overflow-hidden  shadow-lg sm:w-28 sm:h-28">
					<img
						src={sessionInfor.Icon}
						alt=""
						style={{ width: '100%' }}
					/>
				</div>
				<div className="flex items-center mt-2 sm:mt-3 md:mt-5">
					<div className="me-2 text-lg text-white font-semibold">
						{sessionInfor.Nickname}
					</div>
					<Link href="#">
						<BsFillPencilFill
							color="white"
							size="15px"
						/>
					</Link>
				</div>
				<div>
					<button className="ring-1 ring-white rounded-lg px-2 py-1 mt-2 sm:mt-3 md:mt-5 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-orange-200 hover:ring-2">
						編輯個人資訊
					</button>
				</div>
			</div>
			<div className="flex flex-col sm:rounded-lg sm:ring-1 sm:ring-gray-200  sm:shadow sm:sm:w-1/2 sm:h-auto">
				<div className="flex items-center justify-center p-2 sm:h-1/2">
					<div className="flex flex-col items-center me-5 sm:me-10 md:me-16">
						<span className="text-sm text-gray-400 sm:text-base">已參加</span>
						<span className="font-semibold text-base leading-10 sm:text-lg">
							{datauserCourse}堂課
						</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-sm text-gray-400 sm:text-base">已完成</span>
						<span className="font-semibold text-base leading-10 sm:text-lg">
							5堂課
						</span>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center border-t-2 p-2 sm:h-1/2">
					<span className="text-sm text-gray-400 sm:text-base">已發布課程</span>
					<span className="font-semibold text-base leading-10 sm:text-lg">
						{datauserUploadCourse}堂課
					</span>
				</div>
			</div>
		</div>
	);
}
