import { useState } from 'react';
import styles from '@/styles/learner.module.css';
import ContentCard from "@/components/member/learnerHomework/contentCard";

export default function Content() {
	const [data, setDate] = useState("have");
	const [nodata, setNoDate] = useState("have");
	return (
		<div className={styles.content}>
			<div className={`grid grid-cols-2 w-full md:grid-cols-3 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 md:gap-y-16 mt-10 sm:mt-16 `}>
				<ContentCard
					title={"學生能養成學習的習慣，就更能達成目標。運用學習排程器來空出學習時間，並使排程器來空出學習時間，排程器來空出學習時間，排程器來空出學習時間，排程器來空出學習時間，排程器來空出學習時間，"}
					picUrl={"/learner/code1.jpg"}
					prise={"1235"}
					quantity={"12515"}
					button={data ? "查看作業" : "繳交作業"}
					buttonStyle={data ? "bg-amber-400 px-2 py-1 text-sm font-semibold text-white md:text-base shadow-sm rounded-lg	hover:bg-amber-300 " : "ring-1 ring-white rounded-lg px-2 py-1 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-orange-200 hover:ring-2"}
				/>
				<ContentCard
					title={"Python 程式設計入門"}
					picUrl={"/learner/code.jpg"}
					prise={"151"}
					quantity={"220"}
					button={nodata ? "繳交作業" : "查看作業"}
					buttonStyle={nodata ? "ring-1 ring-orange-400 rounded-lg px-2 py-1 text-sm md:text-base font-semibold text-orange-400 shadow-sm hover:bg-orange-200 hover:ring-2" : "bg-amber-400 px-2 py-1md:text-base text-sm font-semibold text-orange shadow-sm rounded-lg	hover:bg-amber-300 "}
				/>
				<ContentCard
					title={"JavaScript 前端開發入門"}
					picUrl={"/learner/code1.jpg"}
					prise={"535"}
					quantity={"354"}
					button={data ? "查看作業" : "繳交作業"}
					buttonStyle={data ? "bg-amber-400 px-2 py-1 text-sm font-semibold text-white md:text-base shadow-sm rounded-lg	hover:bg-amber-300 " : "ring-1 ring-white rounded-lg px-2 py-1 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-orange-200 hover:ring-2"}
				/>
				<ContentCard
					title={"Java 網路應用程式開發"}
					picUrl={"/learner/code.jpg"}
					prise={"1250"}
					quantity={"15"}
					button={nodata ? "繳交作業" : "查看作業"}
					buttonStyle={nodata ? "ring-1 ring-orange-400 rounded-lg px-2 py-1 text-sm md:text-base font-semibold text-orange-400 shadow-sm hover:bg-orange-200 hover:ring-2" : "bg-amber-400 px-2 py-1md:text-base text-sm font-semibold text-orange shadow-sm rounded-lg	hover:bg-amber-300 "} />
			</div>
		</div>
	);
}
