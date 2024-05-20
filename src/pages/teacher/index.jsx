import Header from '@/components/member/teacher/header';
import Sidebar from '@/components/member/teacher/sidebar';
import Tabbar from '@/components/member/tabbarTeacher';
import UploadCard from '@/components/member/teacher/uploadCard';
import Content from '@/components/member/teacher/content';
import Search from "@/components/member/search";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import React from 'react';
import styles from '@/styles/teacher.module.css';
import Link from 'next/link';

export default function Index() {
	const [windowNav, setWindowNav] = useState("hidden");
	return (
		<>
			<div className={`${styles.container}`}>
				{/* header */}
				<Header />

				<h1 className="text-2xl md:text-3xl font-semibold mt-10">課程</h1>
				<div className='mt-10 hidden md:flex justify-between'>
					<div className="flex items-center md:flex ">
						<Search />
					</div>
					<Link href="/teacher/uploadCourse">
						<button
							type="button"
							className="py-2 px-2 inline-flex items-center gap-x-2 text-lg font-semibold border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none" >
							建立課程
						</button>
					</Link>

				</div>
				<UploadCard />
				<div className="md:hidden mt-5">
					<Search />
				</div>
				<h1 className="sm:text-2xl text-xl font-semibold text-center mt-10">
					已發表課程
				</h1>

				<Content />
			</div>
			<Tabbar setWindowNav={setWindowNav} windowNav={windowNav} />

			{/* SECTION mobileWindowNavbar */}
			<Sidebar WindowNav={windowNav} setWindowNav={setWindowNav} />
		</>
	);
}
