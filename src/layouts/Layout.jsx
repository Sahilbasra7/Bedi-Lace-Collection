import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
