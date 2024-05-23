import React from 'react';
import Image from 'next/image';
import Tags from '@/components/home/card-modules/tags';
import { useEffect, useState } from 'react';
import { FaFire } from 'react-icons/fa6';

export default function RatingCard({ data }) {
	return (
		<a
			className="flex flex-1 flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition overflow-hidden"
			href="#">
			<img
				className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
				src={data.Filename}
				alt="Image Description"
			/>
			<div className="px-2 py-2 md:px-5">
				<h3 className="text-lg font-bold text-gray-800 line-clamp-1">
					{data.Name}
				</h3>
				<p className="mt-1 text-gray-500 line-clamp-2">{data.Intro}</p>
			</div>
			<div className="flex items-center pt-1 pb-2 pl-4 gap-1 text-sm sm:gap-2">
				<div className="flex items-center gap-1">
					<FaFire />
					熱門課程
				</div>
				<Tags>{data.DomainName}</Tags>
			</div>
		</a>
	);
}
