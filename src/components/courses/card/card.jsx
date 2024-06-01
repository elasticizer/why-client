import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';

export default function Card({
	data = {
		SN: '',
		Name: '',
		Intro: '',
		Price: 0,
		Nickname: '',
		Filename: ''
	}
}) {
	const { SN, Name, Intro, Price, DomainName, Nickname, Filename } = data;
	return (
		<a
			className="group bg-gray overflow-hidden md:max-w-2xl md:flex gap-3"
			href="#">
			<div className="md:shrink-0 relative duration-500 ease-in-out hover:rounded-lg">
				<img
					className="z-0 border-spacing-4 sm:rounded-2xl lg:rounded-[15px] sm:h-auto sm:w-[580px] md:w-[250px] object-fill"
					src={Filename}
					alt="Modern building architecture "
				/>
			</div>

			<div className="inline-flex flex-col space-y-2">
				<div className="lg:h-12 md:h-7 sm:h-5 tracking-wide text-lg text-black font-bold">
					{Name}
				</div>

				<span className="block mt-1 text-sm leading-tight font-normal text-gray-500">
					{Nickname}
				</span>
				<div className="inline-flex space-x-4">
					<div className="inline-flex ">
						<div className="lg:text-base text-base  text-gray-500 line-clamp-2">
							{Intro}
						</div>
					</div>
				</div>
				<div className='flex justify-between'>
					<div className="py-1 px-3 inline-flex items-center  text-base font-semibold rounded-lg border border-transparent bg-yellow-100 text-yellow-700 disabled:opacity-50 disabled:pointer-events-none ">
						{DomainName}
					</div>
					<span className=" text-2xl font-bold tracking-tight  text-[#019fde]">
						NT$<span>{Price}</span>
					</span>
				</div>
				
			</div>
		</a>
	);
}
