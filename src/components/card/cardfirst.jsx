import React, { useEffect, useState } from 'react';

import Card from './Card';

export default function CardFirst() {
	const [course, setCourses] = useState([]);
	const data = async () => {
		const url = `/api/course`;
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data)
			//確定資料是陣列資料類型才設定到狀態當中
			if (Array.isArray(data)) {
				setCourses(data);
			}
		} catch (e) {
			console.error(e);
			setCourses([]);
		}
	};
	useEffect(() => {
		data();
	}, []);

	return (
		<>
			{course.map(v => {
				console.log(v)
				return <Card data={v} key={v.SN} />
			})
			}
		</>
	)
}

// 	return (
// 		<>
// 			<div key={courses.SN}
// 				className="group bg-gray rounded-xl overflow-hidden md:max-w-2xl md:flex gap-3">
// 				<div className="md:shrink-0 relative  group-hover:scale-105 transition-transform duration-500 ease-in-out "	>
// 					<div className="absolute end-5 top-3 size-9 "
// 					></div>
// 					<img
// 						className=" z-0 border-spacing-4 border rounded-[15px] h-60 w-full object-cover md:h-full md:w-60 "
// 						src="/image/group-1.jpg"
// 						alt="Modern building architecture "
// 					/>
// 				</div>

// 				<div className="inline-flex flex-col space-y-2">
// 					<div className="  tracking-wide text-lg text-black font-bold ">
// 						{courses.Name}
// 					</div>
// 					<span className="block mt-1 text-sm leading-tight font-normal text-gray-500 ">
// 						{courses.Nickname}
// 					</span>

// 					<div className="flex space-x-3">
// 						<div className="inline-flex space-x-1 ">
// 							<div className="mt-0.5 size-15 inline-flex  justify-center  rounded-full text-yellow-400 ">
// 								<FaStar />
// 								<FaStar />
// 								<FaStar />
// 								<FaStar />
// 								<FaStar />
// 							</div>

// 							<div className="mb-5 lg:text-sm text-base text-gray-500 hover:underline">
// 								5.0 <span>( 168 )</span>
// 							</div>
// 						</div>
// 						<div className="inline-flex ">
// 							<div className="mt-0.5 size-5 flex justify-center  rounded-full bg-blue-0 text-blue-600">
// 								<MdPeopleAlt />
// 							</div>
// 							<div className="lg:text-sm text-base text-gray-500">
// 								1,990 <span className="font-bold"></span>
// 							</div>
// 						</div>
// 						<div className="inline-flex ">
// 							<div className="mt-0.5 size-5 flex justify-center  rounded-full bg-blue-0 text-blue-600">
// 								<IoTimeOutline />
// 							</div>
// 							<div className="lg:text-sm text-base text-gray-500">15.1H</div>
// 						</div>
// 					</div>
// 					<span className="mb-8 text-2xl font-bold tracking-tight  text-[#019fde]	 ">
// 						NT$<span>1,800</span>
// 					</span>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
// export default CardFirst;
