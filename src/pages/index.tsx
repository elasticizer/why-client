import Image from 'next/image';
import Navbar from '@/components/head/navbar';
import Slideshow from '@/components/head/slideshow';
import Slideshow2 from '@/components/head/slideshow2';
import Course from '@/components/head/course';
import Article from '@/components/head/article';
import Rating from '@/components/head/rating';
import Footer from '@/components/head/footer';
import Card from '@/components/head/card';
import Slogan from '@/components/head/slogan';
import QuickGuide from '@/components/head/quickGuide';

export default function Home() {
	return (
		<>
			<Navbar />
			<Slideshow2 />
			<Course />
			<QuickGuide />
			{/* <Card /> */}
			<Article />
			<Rating />
			<Footer />
		</>
	);
}
