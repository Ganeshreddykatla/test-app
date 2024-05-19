import Header from "../Components/comman/Header";
import Footer from "../Components/comman/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;