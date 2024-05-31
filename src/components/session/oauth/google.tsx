import { FcGoogle } from 'react-icons/fc';
import OAuth from '.';
import { env } from 'process';

export default function Google() {
	return (
		<OAuth
			name="Google"
			onClick={() => location.assign('/api/auth/google')}>
			<FcGoogle size={24} />
		</OAuth>
	);
}
