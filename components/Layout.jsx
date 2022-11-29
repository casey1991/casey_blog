import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container max-w-screen-lg mx-auto">{children}</main>
      <Footer />
    </>
  );
}
