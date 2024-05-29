import Header from '@/components/member/teacher/header';
import Sidebar from '@/components/member/teacher/sidebar';
import Tabbar from '@/components/member/tabbarTeacher';
import UploadCard from '@/components/member/teacher/uploadCard';
import Content from '@/components/member/teacher/content';
import Search from '@/components/member/search';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import React from 'react';
import styles from '@/styles/teacher.module.css';
import Link from 'next/link';
import IncomePage from '@/components/income';

export default function Index() {
	const [windowNav, setWindowNav] = useState('hidden');
	return (
		<>
			<div className={`${styles.container}`}>
				<Header />
				<title>講師收益</title>
				<IncomePage />
			</div>
			<Tabbar
				setWindowNav={setWindowNav}
				windowNav={windowNav}
			/>
			<Sidebar
				WindowNav={windowNav}
				setWindowNav={setWindowNav}
			/>
		</>
	);
}
