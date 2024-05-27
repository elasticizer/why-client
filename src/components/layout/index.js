import Footer from "../globals/Footer";
import Header from "../globals/Header";
export default function DefaultLayout({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
