import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto container max-w-screen-lg">{children}</main>
      <Footer />
    </>
  );
}
