import Link from 'next/link';
import 'animate.css';
import { BsSuitHeartFill } from "react-icons/bs";
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';


export default function Card({ setDataSuccess, user, collectedCoursSN, title, picUrl, price, quantity, teacher, domain }) {
	const [iconColor, setIconColor] = useState("red");
	console.log(iconColor);


	const deletedData = async () => {
		try {
			const result = await Swal.fire({
				title: "確定不再關注該課程嗎?",
				text: "或許之後有優惠價喔!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "刪除!",
				cancelButtonText: "取消!"
			});

			if (result.isConfirmed) {
				const data = await fetch(`/api/learner/wishList/delete?User=${user}&collectedCoursSN=${collectedCoursSN}`).then(r => r.json());
				// 將空物件設定給狀態，讓content再次渲染
				setDataSuccess({});
				console.log('刪除成功');

				await Swal.fire({
					title: "已刪除!",
					text: "如果有需要可以再列入關注",
					icon: "success",
					confirmButtonColor: "#3085d6",
					confirmButtonText: "完成!"
				});
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				setIconColor("red");

			}
		} catch (err) {
			console.error(err);
		}
	};


	return (
		<Link href='#' className='animate__animated animate__fadeIn relative'>
			<div className="flex w-full h-full shadow-sm ring-1 ring-gray-300 flex-col relative rounded-lg overflow-hidden hover:bg-gray-100">
				<div className="h-36 md:h-52 w-full md:me-0 overflow-hidden">
					<img
						className="hover:scale-125"
						src={picUrl}
						alt=""
						style={{ "width": "100%", "height": "100%", "object-fit": "cover" }}
					/>
				</div>
				<div className="flex w-full h-auto">
					<div className={` flex flex-col justify-between items-start p-2 w-full`}>
						<div className="flex flex-col w-full">
							<div className="text-sm font-bold leading-5  md:text-base text-justify w-full line-clamp-2">{title}</div>
							<div className="text-xs text-gray-400 leading-6 text-wrap text-justify">作者:{teacher}</div>
							<div>
								<button className='ring-1 ring-orange-500 text-orange-500 px-1 py-1 text-xs font-semibold shadow-sm hover:text-orange-300 hover:ring-2 hover:ring-orange-300 md:flex md:mt-2 md:mb-4'>#{domain}</button>
							</div>

						</div>

						<div className="flex justify-between w-full items-center mt-2 md:mt-0">
							<span className='text-base font-black text-red-500 leading-6'>${price}</span>
							<span>已售 {quantity}</span>
						</div>

					</div>
				</div>


			</div>
			<button className="absolute top-2 right-2" onClick={(e) => {
				e.preventDefault();
				setIconColor(iconColor == "white" ? "red" : "white");
				deletedData();
			}}><BsSuitHeartFill color={iconColor} size="25px" /></button>
		</Link>

	);
}
