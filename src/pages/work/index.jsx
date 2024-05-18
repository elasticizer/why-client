import MainLayout from '@/layouts/mainLayout';
import List from '@/components/work/list';
export default function WorkPage() {
	return (
		<>
			<MainLayout>
				<title>精選作業</title>
				<List />
			</MainLayout>
		</>
	);
}
