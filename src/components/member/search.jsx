import React, { useRef } from 'react';
import { BsSearch } from "react-icons/bs";

export default function Search({ setSearch }) {
	const inputEl = useRef();

	const handleSumbit = (e) => {
		e.preventDefault();
		setSearch(inputEl.current.value);
	};
	return (
		<form className="items-center" onSubmit={handleSumbit}>
			<div className=" flex">
				<input ref={inputEl} className="h-auto border  shadow-sm 	rounded-none ps-2 w-full" type="text" placeholder='輸入關鍵字' />
				<button type="submit" className="bg-black	p-2 ps-3 pe-3"><BsSearch size="20px" color="white" /></button>
			</div>

		</form>
	);
}
