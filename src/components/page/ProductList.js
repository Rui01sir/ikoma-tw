import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ProductData from '../database/ProductData';

function ProductList() {
    const { id } = useParams(); // 獲取動態路由中的 id，這裡指的是產品的 name
    const navigate = useNavigate();

    // 根據 name 查找對應的產品
    const productItem = ProductData.find(item => item.name === id); // 用 name 查找

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
            const boxes = document.querySelectorAll('.product__listbox-1 , .product__textbox');
    
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('product__listbox-1')) {
                            entry.target.classList.add('animate__fadeInUp');
                        } else if (entry.target.classList.contains('product__textbox')) {
                            entry.target.classList.add('animate__slideInLeft');
                        }
                        entry.target.classList.add('animate__animated');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            boxes.forEach(box => {
                observer.observe(box);
            });
        }, []);

    const handleBrandClick = () => {
        navigate('/some-page'); // 導航到其他頁面
    };

    if (!productItem) {
        return <div>Product not found</div>;
    }

    const contentData = productItem.accordionContent || []; // 從產品中獲取 accordionContent
    
    return (
        <div>
            <div className="banner-page">
                <img src={`${process.env.PUBLIC_URL}/img/ac3nu-5l52e.webp`} alt="product-banner" />
            </div>
            <div className="product__list-contact">
                <div className="product__list-page">
                    <div className="product__listbox-1">
                        <h1>{productItem.name}</h1>
                        <p>{productItem.title1}</p>
                    </div>
                    <div className="product__listbox-2">
                        <img src={productItem.imageUrl1} alt={productItem.name} />
                        <div className='product__listbox-text'>
                            <p>{productItem.font1}</p>
                            <p>{productItem.font2}</p>
                            <p>{productItem.font3}</p>
                        </div>
                    </div>
                    <div className="product__listbox-3">
                        <div className="product__listimg">
                            <img src={productItem.imageUrl2} alt={productItem.name} />
                        </div>
                        <div className="product__listbox-4">
                            <div className='product__textbox'>
                                <h3>{productItem.content1}</h3>
                                <p>{productItem.text1}</p>
                            </div>
                            <div className='product__textbox'>
                                <h3>{productItem.content2}</h3>
                                <p>{productItem.text2}</p>
                            </div>
                            <div className='product__textbox'>
                                <h3>{productItem.content3}</h3>
                                <p>{productItem.text3}</p>
                            </div>
                            <div className='product__textbox'>
                                <h3>{productItem.content4}</h3>
                                <p>{productItem.text4}</p>
                            </div>
                            <div className='product__textbox'>
                                <h3>{productItem.content5}</h3>
                                <p>{productItem.text5}</p>
                            </div>
                            <div className='product__textbox'>
                                <h3>{productItem.content6}</h3>
                                <p>{productItem.text6}</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-page__line"></div>
                    <div className="product__listbox-5">
                        <h1>{productItem.name}</h1>
                        <h4>{productItem.title2}</h4>
                    </div>
                    <div className="product__listbox-6">
                        <p>{productItem.textlist}</p>
                    </div>
                </div>
            </div>
            <Link to="/Product">
                <div className="news-content__btn">   
                    <img src={`${process.env.PUBLIC_URL}/img/back-icon.svg`} alt="back-icon" />
                    BACK
                </div>
            </Link>
        </div>
    );
}

export default ProductList;


