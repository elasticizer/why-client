import React, { useEffect, useState } from 'react';
import Search from '../../courses/search/search';
import CardSec from '../../courses/card/cardsec';


export default function CardSecList({ domain, rawDomain, setDomain, count, setCount }) {
	const [search, setSearch] = useState('');

	useEffect(() => {
		setDomain(rawDomain.filter(course => course.CourseName.includes(search)))
	}, [search]);




	return (
		<>
			<div className="">

				<div className=" mt-3  w-full lg:mb-6 lg:mt-6  lg:px-0 ">
					


					<div className="my-4 w-full  lg:pl-0 inline-flex items-center justify-between">
						<div className=" flex items-center  text-Black-800 font-semibold text-2xl text-Black-900  ">
							共有
							<span className=" text-orange-600  font-semibold ms-1 py-0.5 px-1.5 text-2xl "
							>{domain.length}
							</span>
							筆{' '}
							<span className=" text-orange-600  font-semibold ms-1 py-0.5 px-1.5 text-2xl "></span>
							課程
						</div>
						<div className="">
							<Search setSearch={setSearch} />
						</div>
					</div>

					<div className="p-3 sm:p-0" >
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
							{domain.map(v => {
								return (
									<CardSec
										data={v}
										key={v.SN}
										setSearch={setSearch}
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
