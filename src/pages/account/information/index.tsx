import InformationForm from '@/components/account/information-form';
import AccountLayout from '@/layouts/account';
import Head from 'next/head';

export default function Information() {
	return (
		<>
			<Head>
				<title>個人資訊</title>
			</Head>

			<AccountLayout>
				<InformationForm />
			</AccountLayout>
		</>
	);
}
