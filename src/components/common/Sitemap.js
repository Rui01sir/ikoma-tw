import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <div>
      <h1>網站地圖</h1>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/Company">Company</Link></li>
        <li><Link to="/News">News</Link></li>
        <li><Link to="/Product">Product</Link></li>
        <li><Link to="/Support">Support</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sitemap;