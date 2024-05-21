import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';
import { FaRegBookmark } from 'react-icons/fa6';
import styles from '@/styles/font.module.css';

export default function Cardsec() {
	return (
		<>
			<div className=" w-[400px]  h-[380px] lg:w-[250px] lg:h-[360px] flex flex-col group bg-white  shadow-sm  overflow-hidden hover:shadow-lg transition">
				<div className="relative pt-[50%] sm:pt-[60%] lg:pt-[60%]  overflow-hidden">
					<img
						className="w-full lg:w-[250px] h-auto absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-tr-3xl  rounded-bl-3xl"
						src="/image/group-1.jpg"
						alt="Image Description"
					/>
				</div>
				<div>
					<button
						type="button"
						className="py- px-2 inline-flex items-center gap-x-2 text-sm font-sans rounded-lg border border-transparent bg-yellow-400 text-black disabled:opacity-50 disabled:pointer-events-none">
						暢銷精選
					</button>
				</div>

				<div className="px-2  md:p-2 gap-2">
					<div className={styles['fonts']}></div>
					<h3 className="text-sm  text-[#383b3d] ">
						產品設計實戰，用Figma打造絕佳UI/UX
					</h3>
					<a
						href="#"
						className="block mt-1  text-sm leading-tight font-base text-gray-500 hover:underline">
						by Ms.Hw．why講師
					</a>
					<div className="flex space-x-1">
						<div className="mt-0.5 size-5 flex justify-center items-center rounded-full text-yellow-400">
							<FaStar />
						</div>
						<div className="mb-5 lg:text-sm text-base text-gray-500 hover:underline">
							5.0 <span>( 168 )</span>
						</div>
						<div className="inline-flex ">
							<div className="mt-0.5 size-5 flex justify-center  rounded-full bg-blue-0 text-blue-600">
								<MdPeopleAlt />
							</div>
							<div className="lg:text-sm text-base text-gray-500">
								1,990 <span className="font-bold"></span>
							</div>
						</div>
						<div className="inline-flex ">
							<div className="mt-0.5 size-5 flex justify-center  rounded-full bg-blue-0 text-blue-600">
								<IoTimeOutline />
							</div>
							<div className="lg:text-sm text-base text-gray-500">15.1H</div>
						</div>
					</div>

					<span className="pt-5 mb-8 text-xl font-bold tracking-tight  text-[#019fde]	 ">
						NT$<span>1,800</span>
					</span>
				</div>
				<a
					className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
					href="#">
					查看更多
				</a>
			</div>
			{/* <div className="grid border rounded-xl shadow-sm divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x">
				<div className="flex flex-col flex-[1_0_0%] bg-white">
					<img
						className="w-full h-auto rounded-t-xl sm:rounded-se-none"
						src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
						alt="Image Description"
					/>
					<div className="p-4 flex-1 md:p-5">
						<h3 className="text-lg font-bold text-gray-800">Card title</h3>
						<p className="mt-1 text-gray-500">
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</p>
					</div>
					<div className="p-4 border-t sm:px-5">
						<p className="text-xs text-gray-500">Last updated 5 mins ago</p>
					</div>
				</div>
				<div className="flex flex-col flex-[1_0_0%] bg-white">
					<img
						className="w-full h-auto"
						src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
						alt="Image Description"
					/>
					<div className="p-4 flex-1 md:p-5">
						<h3 className="text-lg font-bold text-gray-800">Card title</h3>
						<p className="mt-1 text-gray-500">
							This card has supporting text below as a natural lead-in to
							additional content.
						</p>
					</div>
					<div className="p-4 border-t sm:px-5">
						<p className="text-xs text-gray-500">Last updated 5 mins ago</p>
					</div>
				</div>
				<div className="flex flex-col flex-[1_0_0%] bg-white">
					<img
						className="w-full h-auto sm:rounded-se-xl"
						src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
						alt="Image Description"
					/>
					<div className="p-4 flex-1 md:p-5">
						<h3 className="text-lg font-bold text-gray-800">Card title</h3>
						<p className="mt-1 text-gray-500">
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This card has even longer content
							than the first to show that equal height action.
						</p>
					</div>
					<div className="p-4 border-t sm:px-5">
						<p className="text-xs text-gray-500">Last updated 5 mins ago</p>
					</div>
				</div>
			</div> */}
		</>
	);
}
