import Footer from "../App/Footer/Footer";
import Header from "../App/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header />
      <main className="lg:max-w-[1000px] m-auto">{children}</main>
      <div className="fixed bottom-0 w-full sm:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
