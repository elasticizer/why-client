// import Navbar from '@/components/home/navbar.jsx';
// import Footer from '@/components/home/footer.jsx';
import { LoaderProvider, useLoader } from '@/hooks/use-loader';

export default function Home({ children }) {
	const { loader } = useLoader();

	return (
		<>
			{/* <Navbar /> */}
			{children}
			{loader()}
			{/* <Footer /> */}
		</>
	);
}
