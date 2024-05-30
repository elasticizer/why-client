import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { fetcher } from '@/utils/utils';
import useSWR, { mutate } from 'swr';
import toast from 'react-hot-toast';
import { IoSettingsOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';

export default function SettingsModal({ userId, setIsShowed, setSubmitted }) {
	const [data, setData] = useState([]);
	const [settings, setsettings] = useState([]);
	const router = useRouter();
	async function init() {
		try {
			const res = await fetch(`/api/art/author/${userId}`);
			const r = await res.json();

			if (r.data) {
				const { is_hide_clap, is_hide_liked, is_hide_followed } = r.data;
				setsettings([is_hide_clap, is_hide_liked, is_hide_followed]);
				return;
			} else {
				throw new Error('獲取隱私設定失敗');
			}
		} catch (error) {
			console.log(error);
			toast.success('獲取隱私設定失敗');
		}
	}

	if (data?.error) return <div>failed to load</div>;

	function handler(n) {
		const next = [...settings];
		next[n] = !next[n];
		setsettings(next);
	}

	async function handleChange() {
		try {
			const res = await fetch(`/api/art/author/${userId}/settings`, {
				method: 'POST',
				body: JSON.stringify({ settings })
			});
			const data = await res.json();
			console.log(data);
			if (data.status) {
				toast.success('修改隱私設定成功');
				setSubmitted(true);
				setIsShowed(false);
				console.log('setIsShowed(false)');
				console.log('setSubmitted(true);');
				router.reload();
			} else {
				throw new Error('修改隱私設定失敗');
			}
		} catch (error) {
			console.log(error);
			toast.success('修改隱私設定失敗');
		}
	}

	useEffect(() => {
		init();
	}, []);

	return (
		<>
			<div className="modal-box">
				<div className="form-control">
					<div className="flex items-center pb-5 gap-1">
						<IoSettingsOutline className="icon" />
						<h2 className="font-black tracking-widest text-zinc-500 ">
							個人檔案隱私設定
						</h2>
					</div>
					<div className="pb-5">
						<label className="cursor-pointer label">
							<span className="label-text">隱藏贊同的文章</span>
							<input
								type="checkbox"
								className="toggle toggle-info"
								onChange={() => {
									handler(0);
								}}
								checked={settings[0]}
							/>
						</label>
						<label className="cursor-pointer label">
							<span className="label-text">隱藏收藏的文章</span>
							<input
								type="checkbox"
								className="toggle toggle-info"
								onChange={() => {
									handler(1);
								}}
								checked={settings[1]}
							/>
						</label>
						<label className="cursor-pointer label">
							<span className="label-text">隱藏追蹤的對象</span>
							<input
								type="checkbox"
								className="toggle toggle-info"
								onChange={() => {
									handler(2);
								}}
								checked={settings[2]}
							/>
						</label>
					</div>
				</div>
				<div className="w-full flex justify-end">
					<button
						className="btn bg-theme-1-1 border-none h-10 text-white tracking-widest text-lg"
						onClick={() => {
							handleChange();
						}}>
						確認修改
					</button>
				</div>
			</div>
		</>
	);
}
