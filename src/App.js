import './App.css';
import 'animate.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './components/page/HomePage';
import Company from './components/page/Company';
import Contact from './components/page/Contact';
import Product from './components/page/Product';
import Support from './components/page/Support';
import SupportList from './components/page/SupportList';
import News from './components/page/News';
import NewsDetail from './components/page/NewsDetail';
import Page404 from './components/page/Page404';
import TopButton from './components/common/TopButton';
import Footer from './components/common/Footer';
import Loading from './components/animations/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingFinish = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      {!isLoading && <Navbar />}
      <Routes>
        <Route path="/" element={<Loading Component={HomePage} onLoadingFinish={handleLoadingFinish} />} />
        <Route path="/Company" element={<Loading Component={Company} onLoadingFinish={handleLoadingFinish} />} />
        <Route path="/Contact" element={<Loading Component={Contact} onLoadingFinish={handleLoadingFinish} />} />
        <Route path="/Product" element={<Loading Component={Product} onLoadingFinish={handleLoadingFinish} />} />
        <Route path="/Support" element={<Loading Component={Support} onLoadingFinish={handleLoadingFinish} />} />
        <Route path="/list" element={<Loading Component={SupportList} onLoadingFinish={handleLoadingFinish} />} />
        <Route path="/News" element={<Loading Component={News} onLoadingFinish={handleLoadingFinish} />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <TopButton />
      {!isLoading && <Footer />}
    </Router>
  );
}

export default App;
