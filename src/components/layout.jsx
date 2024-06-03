
import Navbar from "@/components/art/Navbar.jsx"
import Footer from "@/components/art/Footer.jsx"
export default function Home({ children }) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}