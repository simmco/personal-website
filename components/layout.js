import Nav from './nav';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-grey-300 my-0 mx-auto pt-2 pb-4 px-4" style={{ maxWidth: 660 }}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
