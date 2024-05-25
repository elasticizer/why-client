import { BsLine } from 'react-icons/bs';
import OAuth from '.';

export default function Line() {
	return (
		<OAuth
			name="LINE"
			onClick={() => location.assign('http://localhost:3000/api/auth/line')}>
			<BsLine color="#00ca60" size={24} />
		</OAuth>
	);
}
