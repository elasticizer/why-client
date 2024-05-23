import { useState } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';
import styles from '@/styles/font.module.css';
import { BsBookmarkHeart } from 'react-icons/bs';
import { BsBookmarkHeartFill } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { useCart } from '../../hooks/use-cart';

export default function CardSec({ data = {
	SN: ''
	, Name: ''
	, Intro: ''
	, Price: 0
	, Nickname: ''
	, Filename: ''
	, DomainName: ''
} }) {
	const { SN
		, Name
		, Intro
		, Price
		, Nickname, Filename, DomainName } = data
	const [icon, setIcon] = useState(false)

	// const { addItemToCart } = useCart();

	const getData = async () => {
		try {
			const res = await fetch(`/api/wishlist/insert?userid=1&courseSN=${SN}`);
			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};
	const notify = () => toast.success('已加入購物車');
	return (
		<>
			<a className=" w-full flex flex-col group bg-none  shadow-sm  overflow-hidden hover:shadow-lg transition">
				<div className="relative pt-[50%] sm:pt-[60%] lg:pt-[60%]  overflow-hidden">
					<img
						className="w-full h-auto absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-tr-3xl  rounded-bl-3xl"
						src={Filename}
						alt="Image Description"
					/>
				</div>
				<div className="mt-2 flex justify-between">
					<div
						type="button"
						className="py- px-2 inline-flex items-center gap-x-2 text-sm  rounded-lg border border-transparent bg-yellow-400 text-black disabled:opacity-50 disabled:pointer-events-none">
						{DomainName}
					</div>
					<button onClick={() => {
						icon ? setIcon(false) : setIcon(true)
						getData()
					}}
					>
						{icon ? <BsBookmarkHeartFill className=" text-red-500 sm:my-2 lg:my-0 md:size-7 sm:size-9 " /> : <BsBookmarkHeart className="text-red-500  sm:my-2 lg:my-0 md:size-7 sm:size-9 " />}
					</button>
				</div>


				<div className="px-2  md:p-2 gap-2">
					<div className={styles['fonts']}></div>
					<h3 className="text-normal h-12 tracking-wide text-lg text-black font-bold ">
						{Name}
					</h3>
					<Link
						href="#"
						className="block my-3  text-sm leading-tight font-base text-gray-500 hover:underline">
						{Nickname}
					</Link>
					<div className=" inline-flex space-x-4">
						<div className="inline-flex">
							<div className="mt-0.5 size-5 flex justify-center  items-center rounded-full text-yellow-400">
								<FaStar />
							</div>
							<div className=" lg:text-base text-base text-gray-500 hover:underline">
								5.0 <span>( 168 )</span></div>
						</div>
						<div className="inline-flex ">
							<div className="mt-0.5 size-5 flex items-center justify-center text-base rounded-full bg-blue-0 text-blue-600">
								<MdPeopleAlt />
							</div>
							<div className="lg:text-base text-base  text-gray-500">
								1,990 <span className="font-bold"></span>
							</div>
						</div>
						<div className="inline-flex ">
							<div className="size-6 flex items-center justify-center rounded-full bg-blue-0 text-blue-600">
								<IoTimeOutline />
							</div>
							<div className="lg:text-sm text-base text-gray-500">15.1H</div>
						</div>
					</div>

					<span className=" flex text-xl justify-between items-center font-bold tracking-tight  text-[#019fde] ">
						<div>NT$<span>{Price}</span></div>

						<div>
							<button onClick={() => {
								notify()
								{ addItemToCart }
							}}>
								<img
									className=" size-10"
									src="/image/cart.gif"
									alt=""
								/>
							</button>

							<Toaster />
						</div>

					</span>
				</div>

			</a>

		</>
	);
}
