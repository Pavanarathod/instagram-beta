import Footer from "../App/Footer/Footer";
import Header from "../App/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-2 md:mx-auto lg:grid-cols-3  lg:max-w-[935px]">
        {children}
      </main>
      <div className="fixed bottom-0 w-full sm:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
