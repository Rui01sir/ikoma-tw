import './App.css';
import 'animate.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './components/page/HomePage';
import Company from './components/page/Company';
import Contact from './components/page/Contact';
import Product from './components/page/Product';
import ProductList from './components/page/ProductList';
import SupportList from './components/page/SupportList';
import News from './components/page/News';
import NewsDetail from './components/page/NewsDetail';
import Page404 from './components/page/Page404';
import TopButton from './components/common/TopButton';
import Footer from './components/common/Footer';
import Loading from './components/animations/Loading';
import ScrollToTop from './components/common/ScrollToTop';

function AppContent() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation(); // 監聽路由變化

  useEffect(() => {
    setIsLoading(true); // 進入新頁面時顯示 Loading
    const timer = setTimeout(() => setIsLoading(false), 1000); // 1 秒後隱藏 Loading
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      {!isLoading && <Navbar />}
      {isLoading ? (
        <Loading onLoadingFinish={() => setIsLoading(false)} />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SupportList" element={<SupportList />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/product/:id" element={<ProductList />} />
          {/* <Route path="/News" element={<News />} /> */}
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      )}
      <TopButton />
      {!isLoading && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;