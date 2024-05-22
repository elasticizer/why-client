import React from 'react';
import Image from 'next/image';
import Tags from '@/components/home/card-modules/tags';
import { useEffect, useState } from 'react';

export default function RatingCard({ data }) {
	return (
		<a
			data-aos="zoom-in-down"
			class="flex flex-1 flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition"
			href="#">
			<img
				class="w-full h-auto rounded-t-xl"
				width={100}
				height={100}
				src={data.Filename}
				alt="Image Description"
			/>
			<div class="px-4 py-2 md:px-5">
				<h3 class="text-lg font-bold text-gray-800 line-clamp-1">
					{data.Name}
				</h3>
				<p class="mt-1 text-gray-500 line-clamp-2">{data.Intro}</p>
			</div>
			<div className="flex p-2">
				<Tags>{data.DomainName}</Tags>
			</div>
		</a>
	);
}
