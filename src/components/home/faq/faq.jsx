/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import FaqCard from './faqCard';
import { FaSearch } from 'react-icons/fa';

const faqs = [
	{
		question: '買過的課程在哪裡',
		answer:
			'點擊 WhySchool 官網右上角的「我的學習」，並點擊你所購買的商品類型，即可在「所有課程」中找到購買的商品。'
	},
	{
		question: '如何在 WhySchool 購買課程',
		answer:
			'Step 1. 前往你想要購買的課程頁面，點選「立即購買」<br /> Step 2.網頁將會跳轉至登入頁面，若你已經是 WhySchool會員請點選註冊帳號時的登入方式； 若還不是 WhySchool會員，請點選「快速註冊」'
	},
	{
		question: '課程影片無法播放',
		answer:
			'如果課程影片載入過慢或者觀看不流暢，可以嘗試下列方式來獲得改善：<br /> 1.帳號登出後重新登入<br /> 2.確認瀏覽器頁面是否開啟過多分頁<br /> 3.使用瀏覽器「無痕模式」播放測試<br /> 4.瀏覽器關閉重開<br /> 5.清除瀏覽器快取<br /> 6.設備關機重開<br /> 7.更換其他網路<br /> 8.更換其他瀏覽器'
	},
	{
		question: '在「我的學習」找不到曾經購買的課程',
		answer:
			'有可能是你擁有多個帳號，而目前登入到沒買課程的帳號所導致。你可以先登出，再重新使用購買課程的帳號進行登入，即可順利看到課程。若是忘記當時註冊的帳號，請於登入畫面點擊「忘記帳號」並輸入驗證信箱，系統將發送購買課程的帳號登入方式給你，請依照信件中所顯示的登入方式進行登入即可。'
	},
	{
		question: '線上影音課程的意思',
		answer:
			'可以無限次重複觀看，且沒有期限，不再擔心錯過上課時間<br /> 1.帶著筆電、手機、或是平板，連著網路，在哪裡都可以開心學習<br /> 2.課程頁面多有其他好學生留下的評價、作業，可以在購課前參考<br /> 3.部分課程提供單元試看，可在購買前確認課程是否適合自己<br /> 4.可在問題討論區留言發問，與好老師及同學們互動交流意見'
	},
	{
		question: '註冊成為 WhySchool 會員',
		answer:
			'點擊 WhySchool 官網右上角的「我的學習」，並點擊你所購買的商品類型，即可在「所有課程」中找到購買的商品。'
	},
	{
		question: '建立個人檔案',
		answer:
			'在 WhySchool 的系統裡，可以透過Google進行登入，或是申請一組「帳號密碼」進行登入。而註冊後若想要有多種登入方式，請到「帳號設定」頁面連結其他登入方式'
	},
	{
		question: '可以一次使用多張折扣券 (Coupon) 嗎',
		answer:
			'不行，如果你擁有多張折扣券是無法同時在購物車中結帳使用的，請選擇一張使用'
	},
	{
		question: '購物車有加入課程的數量上限嗎',
		answer: '沒有的，把喜歡的課程都加進來吧！'
	},
	{
		question: '付款成功後如何確認',
		answer:
			'付款完成後，你可以至「訂單紀錄」頁面，確認訂單是否已經從「等待付款」轉移至「已完成訂單」！'
	}
];

export default function Faq() {
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredFaqs, setFilteredFaqs] = useState(faqs);

	const handleSearchChange = event => {
		setSearchTerm(event.target.value);
	};

	const handleSearchClick = () => {
		const filtered = faqs.filter(
			faq =>
				faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
				faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredFaqs(filtered);
	};

	return (
		<>
			{/* <!-- FAQ --> */}
			<div className="max-w-[75rem] bg-gray-100 my-10 rounded-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				{/* <!-- Grid --> */}
				<div className="grid md:grid-cols-5 gap-10">
					<div className="md:col-span-2">
						<div className="max-w-xs">
							<h2 className="mb-3 text-2xl font-bold md:text-4xl md:leading-tight">
								常見問題
							</h2>
							<p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">
								以下提供您熱門的常見問題與解答
								<br />
								也歡迎於下方
								<a
									href="#contact-form"
									className="text-orange-600 font-bold">
									"聯絡我們"
								</a>
								提出疑問
							</p>
						</div>
						<div className="flex items-center gap-2">
							<input
								type="text"
								value={searchTerm}
								onChange={handleSearchChange}
								placeholder="搜尋常見問題"
								className="py-3 px-5 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
							/>
							<button onClick={handleSearchClick}>
								<FaSearch />
							</button>
						</div>
					</div>
					{/* <!-- End Col --> */}

					<div className="md:col-span-3">
						{/* <!-- Accordion --> */}
						<div className="hs-accordion-group divide-y divide-gray-200">
							{filteredFaqs.map((faq, index) => (
								<FaqCard
									key={index}
									question={faq.question}>
									<p dangerouslySetInnerHTML={{ __html: faq.answer }} />
								</FaqCard>
							))}
						</div>
						{/* <!-- End Accordion --> */}
					</div>
					{/* <!-- End Col --> */}
				</div>
				{/* <!-- End Grid --> */}
			</div>
			{/* <!-- End FAQ --> */}
		</>
	);
}
