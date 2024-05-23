/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import ArticleCard from '@/components/home/card-modules/articleCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Article() {
	const [page, setPage] = useState(1); // 追蹤當前頁面
	const perPage = 4; // 每頁顯示的課程數量
	const [data, setData] = useState([]);
	const [displayedData, setDisplayedData] = useState([]);

	const articleImg = [
		{
			author: 'Andy',
			title: '德文自學，從零開始——免費德語自學資源大公開',
			content:
				'自學語言從零到一的起步過程，我常常面臨到一個尷尬的處境——網路資源很豐富、內容涵蓋廣泛，對我來說卻沒有一種系統感，常常是坑坑洞洞的學習。在我自學德文的過程中，一開始也吃了不少苦頭，不過在大量地去嘗試各式各樣的網路資源後，找到了屬於自己的一套學習方式——在最初學時比較喜歡有系統地學習，有一定的程度之後再到處看到處學。以下提供我的自學教材，有分用中文學習和英文學習兩種途徑（但英文居多），每個介紹的資源都會附上我自己學習的心得、優缺評價。如果對德文學習有興趣的讀者可以繼續閱讀。',
			fileName: 'https://images.hahow.in/images/63ef53d97d2d72531f7a642e'
		},
		{
			author: 'David',
			title: '2024 繪圖軟體推薦！電繪選擇指南＋精選社群，輕鬆畫出你的繽紛世界',
			content:
				'繪圖軟體是什麼？速覽電繪軟體 2 大比較繪圖軟體，泛指所有能進行「圖像處理」的應用程式。又稱為電繪軟體、製圖軟體以及圖像軟體。等等，這種籠統定義，想必對正要開始學習電繪的你沒什麼幫助吧！以下整理 2 大比較，讓你更有效率認識繪圖軟體的關鍵差異。電繪 Vs. 手繪不同的媒材工具，使繪圖軟體與傳統手繪在繪畫手感、編輯修改與儲存方式各有特色。',
			fileName: 'https://images.hahow.in/images/65f8fdd758ed1b0b6bf3979b'
		},
		{
			author: 'Json',
			title: '搞定面試問與答，1個面試技巧 + 7 個面試問題讓你更加分！',
			content:
				'該如何進行面試準備？面試時，雇主的面試提問環節就是面試的重頭戲，可能是你前面的面試自我介紹很吸引人，也可能是履歷中還有讓他好奇的事情，該如何好好回答以展現最好的自己？本篇整理了 1 個面試技巧與 7 個面試問題，讓你在面試準備時，可以事先練習，到了實際面試時可以直接用上的面試提問問題集！首先，想擺脫支支吾吾，就用 STAR 原則，這個面試技巧讓你回答得有邏輯又讓人抓得到重點！但除了好好回答就夠了嗎？當面試官問你：「還有沒有什麼問題呢？」換成你問問題時，如果說沒問題，那就是大有問題了！後半部的 7 個面試問題，幫助你在面試提問環節，留下好印象，提升錄取率！面對面試問題總是回答得支支吾吾嗎？面試準備時，除了面試自我介紹可以事先準備以外，你知道回答也可以先練習嗎？來看看 STAR 原則怎麼用，再試著用這個面試技巧來為你的回答進行排練！',
			fileName: 'https://images.api.hahow.in/images/61b97d994cff59000652b71c'
		},
		{
			author: 'Allen',
			title: '從求有到求好－字型如何影響我們的生活',
			content:
				'容許人們遠端又安靜交流的時代，我們從社群軟體、到回家路上的廣告招牌、再到第二天上台簡報，字體一直在那默不作聲地影響著你的生活。它們有自己的聲音、秉性與脾氣，試圖與你溝通。說到這裡，你或許會想，字體有得用不就夠了，字體的設計與創發又與我何干？這裡就要以活生生的例子，來破除字體與自己此生無緣的迷思，以下來自圖文不符的執行企劃侯沁歡分享（以下稱歡歡）。歡歡在大學時主修織品系，想來的確離字體世界有些遙遠，而讓她對字體認識萌生興趣的契機，反倒是輔系時修了鄭司維老師的課，其中兩三堂跟字型有關的知識，從襯線、非襯線，到字體歷史的演變⋯⋯每一點有趣知識的累積，讓她開始想對這個領域瞭解更多，也在做作業的過程中得到莫大的樂趣。「從前真的不覺得自己對這個領域有天份。而且在我輔系以前，還曾經在誠品看《字型散步》看到睡著，那時候真的覺得自己也太沒慧根了吧！」歡歡跟我們分享了這件青春糗事，還好在 justfont 開辦的字體課中發現自己還是孺子可教也的啊！她說，其實新手所需要的就是真正的實作，當自己還是字型領域的一張白紙時，看書自我摸索有它的限制，無法具體化感覺書中要陳述的內容，實際動手做的時候，那些疑惑反而迎刃而解。而另一位字體課的學生——林廷翰，本身就是對字體知識的強需求者，以前還在就讀視覺傳達設計時，明知道字型很重要，卻總是只能靠著感覺來做選擇。以至於作品的品質不穩定。',
			fileName: 'https://images.hahow.in/images/64099bbc3f5d66df7fb6f75d'
		},
		{
			author: 'Jack',
			title: '如果人生是場「遊戲」，你該怎樣升等通關？',
			content:
				'很多人的求學時期應該跟我一樣，一碰電玩遊戲就會被父母提醒：「整天都在玩！還不快去讀書！」殊不知我才剛開機 5 分鐘連角色都還沒登入啊⋯⋯。時至今日遊戲產業蓬勃發展，上一輩鮮少預料到有「電競選手」這個職業的誕生，因此許多的父母也漸漸的改變原先的觀點，不會讓孩子埋首於書本堆中；因為遊戲有時候能讓我們「體驗」真實的人生，甚至及早認知社會的協作必要性，如果將「遊戲化」的思維用在工作與學習上，還會有加倍的效率與成果！',
			fileName: 'https://images.hahow.in/images/642697be3101425220f1230e'
		},
		{
			author: 'Cindy',
			title: '跨越山海，共創知識：推動偏遠教師增能的學習 3 動力',
			content:
				'近年來，科技的快速發展不僅改變我們的生活方式，也為教育帶來前所未有的革命。Hahow for Campus 聯手教育部國教署和為台灣而教基金會、誠致教育基金會共同推動《偏遠地區學校教師增能公益計畫》，精選 100 堂豐富多元的課程內容，透過科技的力量更為偏遠地區的教育帶來新的可能。',
			fileName: 'https://images.api.hahow.in/images/60c376fbfc01bc126e64481b'
		},
		{
			author: 'Jason',
			title: '自傳、履歷怎麼寫？掌握 3 步驟，不廢話、說重點才聰明',
			content:
				'完成寫履歷自傳前的準備工作：認識自我了嗎？接下來就進入寫履歷自傳的實戰教學啦！這篇文章將會分為履歷、自傳、Cover Letter 三個部分說明，希望大家都能獲得實用的技巧。',
			fileName: 'https://images.api.hahow.in/images/61b1cf8d5e59480006ceb93e'
		},
		{
			author: 'Sandy',
			title: '我適合裸辭嗎？12 題測驗＋3 項必做規劃，迴避人資地雷！',
			content:
				'還沒找好下家，就毅然辭職的裸辭族，單憑這一舉動已經能應證你的果敢。但果敢與衝動有時僅一線之隔。所以遞出辭呈前，先讓我們用 SWOT 分析法，快速認識裸辭會帶來的優勢、劣勢、機會與威脅吧！',
			fileName: 'https://images.hahow.in/images/66442de539fb1ff838b4ba96'
		}
	];

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('/api/article?limit=8');
				let postData = await res.json();
				setData(postData);
			} catch (error) {
				setData([]);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		// 根據當前頁面和每頁顯示的課程數量計算要顯示的課程資料
		const startIndex = (page - 1) * perPage;
		const endIndex = startIndex + perPage;
		setDisplayedData(data.slice(startIndex, endIndex));
	}, [data, page, perPage]);

	const nextPage = () => {
		setPage(page + 1);
	};

	const prevPage = () => {
		setPage(page - 1);
	};

	return (
		<>
			<div className="bg-orange-400">
				{/* <!-- Card Blog --> */}
				<div
					className="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
					data-aos="fade-up-right">
					<div className="mb-3 flex justify- text-2xl font-semibold justify-between">
						<div className="flex flex-col justify-items-start gap-3 md:flex-row md:items-center text-white">
							<h1>精選文章</h1>
							<p className="text-sm font-light">為你嚴選系列文章</p>
						</div>
						<div className="flex gap-3 items-center ">
							<button
								className="rounded-full	border-solid border-2 border-gray-600 p-3 hover:scale-110 transition"
								onClick={prevPage}
								disabled={page === 1}>
								<IoIosArrowBack />
							</button>
							<button
								className="rounded-full	border-solid border-2 border-gray-600 p-3 hover:scale-110 transition"
								onClick={nextPage}
								disabled={page * perPage >= data.length}>
								<IoIosArrowForward />
							</button>
						</div>
					</div>
					{/* <!-- Grid --> */}
					<div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
						{/* <!-- Card --> */}
						{displayedData.map((article, i) => (
							<ArticleCard
								key={i}
								title={article.Title}
								content={article.Content}
								author={article.Nickname}
								image={articleImg[i + (page - 1) * perPage].fileName}
							/>
						))}
						{/* <!-- End Card --> */}
					</div>
					{/* <!-- End Grid --> */}
				</div>
				{/* <!-- End Card Blog --> */}
			</div>
		</>
	);
}
