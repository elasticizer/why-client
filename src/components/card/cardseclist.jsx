import React, { useEffect, useState } from 'react';
import Search from '../search/search';
import CardSec from './cardsec';

export default function CardSecList() {
	const [course, setCourse] = useState([]);
	const [search, setSearch] = useState('');
	console.log(search);

	useEffect(() => {
		const data = async () => {
			const url = `/api/courselist`;
			try {
				const res = await fetch(url);
				const data = await res.json();
				const result = data.filter(v => v.Name.includes(search));
				console.log(result);
				setCourse(result);
			} catch (e) {
				console.error(e);
				setCourse([]);
			}
		};
		data();
	}, [search]);

	return (
		<>
			<div className="container">
				
				<div className=" mt-3  w-full lg:mb-6 lg:mt-6 sm:px-7 "><div className=" flex items-center  text-Black-800 font-semibold text-2xl text-Black-900  ">
					改變從此開始，輕鬆掌握新技能！{' '}
				</div>
					<div className="my-24">
				<Search setSearch={setSearch} /></div>
					<div
						className=" mt-5 flex 
					items-center whitespace-nowrap ">
						<li className="  lg:pl-0 inline-flex items-center">
							<div className=" flex items-center  text-Black-800 font-semibold text-2xl text-Black-900  ">
								共有
								<span className=" text-orange-600  font-semibold ms-1 py-0.5 px-1.5 text-2xl ">
									99
								</span>
								筆{' '}
								<span className=" text-orange-600  font-semibold ms-1 py-0.5 px-1.5 text-2xl "></span>
								課程
							</div>
						</li>
					</div>
					<div className="p-3 sm:p-0">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3">
							{course.map(v => {
								return (
									<CardSec
										data={v}
										key={v.SN}
										// addItemToCart={addItemToCart}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
