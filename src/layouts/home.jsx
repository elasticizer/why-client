import Navbar from '@/components/home/navbar.jsx';
import Footer from '@/components/home/footer.jsx';

export default function Home({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}