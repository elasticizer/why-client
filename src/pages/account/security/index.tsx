import SecurityTable from '@/components/account/security-table';
import AccountLayout from '@/layouts/account';
import Head from 'next/head';

export default function Security() {
	return (
		<>
			<Head>
				<title>個人資訊</title>
			</Head>

			<AccountLayout>
				<SecurityTable interactive={true} />
			</AccountLayout>
		</>
	);
}
