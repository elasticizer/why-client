import React from 'react';
import { BsSearch } from "react-icons/bs";

export default function Search() {
	return (
		<form action="" className="items-center">
			<div className=" flex">
				<input className="h-auto border  shadow-sm 	rounded-none ps-2 w-full" type="text" placeholder='輸入關鍵字' />
				<button className="bg-black	p-2 ps-3 pe-3 h-full"><BsSearch size="20px" color="white" /></button>
			</div>

		</form>
	);
}
