import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../animations/Carousel";

const News = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Change this to adjust how many items per page
    const [filteredData] = useState([]); // Assuming this would come from an API or static data

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const boxes = document.querySelectorAll('.news-page__carousel, .news-page__contact, .news-page__about');
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // 使用 setTimeout 增加延遲時間，根據索引增加不同的延遲
                    setTimeout(() => {
                        entry.target.classList.add('animate__fadeInUp', 'animate__animated');
                    }, index * 5000);  // 根據 index 增加每個元素的延遲時間，例如每個元素延遲 300ms
                    observer.unobserve(entry.target);  // 停止觀察，避免重複觸發
                }
            });
        }, { threshold: 0.5 });
    
        boxes.forEach(box => {
            observer.observe(box);
        });
    
        // 清理觀察器
        return () => {
            boxes.forEach(box => {
                observer.unobserve(box);
            });
        };
    }, []);

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/news/${id}`, { state: { refresh: true } });
    };

    const getPageNumbers = () => {
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        const pageNumbers = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, 3, 4, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pageNumbers.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }
        return pageNumbers;
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const pageNumbers = getPageNumbers();
    return (
        <div>
            <div className="banner-page">
                <img src={`${process.env.PUBLIC_URL}/img/af10w-qp20u.webp`} alt="Company-banner" />
            </div>
            <div className="news-page">
                <div className="news-page__carousel animate__fadeInUp animate__animated">
                    <Carousel />
                </div>
                <div className="news-page__contact animate__fadeInUp animate__animated">
                    <div className="news-page__list">
                        <div className='news-page__card-1'>
                            <div className='news-page__box-1 clickable-div' onClick={() => handleClick(1)}>
                                <div className='news-page__box-text'>
                                    <h3>Company's production line equipment upgrade.</h3>
                                </div>
                                <p>2024/06/01</p>
                                <img src={`${process.env.PUBLIC_URL}/img/a2ylt-uyy6q.webp`} alt='news-page__box-1'></img>
                            </div>
                            <div className='news-page__box-2 clickable-div' onClick={() => handleClick(1)}>
                                <div className='news-page__box-text'>
                                    <h3>Daily Production Capacity of Up to 10,000 Units</h3>
                                </div>
                                <p>2024/05/25</p>
                                <img src={`${process.env.PUBLIC_URL}/img/afvlu-17oek.webp`} alt='news-page__box-2'></img>
                            </div>
                        </div>
                        <div className='news-page__card-2 clickable-div' onClick={() => handleClick(1)}>
                            <img src={`${process.env.PUBLIC_URL}/img/a6e05-i715q.webp`} alt=''></img>
                            <div className='news-page__card-text'>
                                <h3>The product is guaranteed with rigorous engineer verification.</h3>
                                <p>The shock absorber modification market is large, but it also hides many substandard counterfeit products. A set of domestically produced shock absorbers starts at 30,000 TWD, while imported ones can range from 80,000 to 120,000 TWD.</p>
                                <a>#Engineer #CarefullySelected #Guaranteed</a>
                                <div className='news-page__btn clickable-div' >
                                    <p>Read more</p>
                                    <img src={`${process.env.PUBLIC_URL}/img/product-next.svg`} alt='news-page__btn'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-page__about animate__fadeInUp animate__animated">
                    <h2>About News</h2>
                    <div className='news-page__about-list'>
                        <div className='news-page__about-box clickable-div' onClick={() => handleClick(1)} >
                            <div className='news-page__about-text'>
                                <h3>The product is guaranteed with rigorous engineer verification.</h3>
                                <p>The shock absorber modification market is large, but it also hides many substandard counterfeit products. A set of domestically produced....</p>
                            </div>
                            <img src={`${process.env.PUBLIC_URL}/img/a6e05-i715q.webp`} alt='news-page__about-img'></img>
                        </div>
                        <hr />
                        <div className='news-page__about-box clickable-div'>
                            <div className='news-page__about-text'  onClick={() => handleClick(1)}>
                                <h3>The product is guaranteed with rigorous engineer verification.</h3>
                                <p>The shock absorber modification market is large, but it also hides many substandard counterfeit products. A set of domestically produced....</p>
                            </div>
                            <img src={`${process.env.PUBLIC_URL}/img/a6e05-i715q.webp`} alt='news-page__about-img'></img>
                        </div>
                        <hr />
                        <div className='news-page__about-box clickable-div'>
                            <div className='news-page__about-text'  onClick={() => handleClick(1)}>
                                <h3>The product is guaranteed with rigorous engineer verification.</h3>
                                <p>The shock absorber modification market is large, but it also hides many substandard counterfeit products. A set of domestically produced....</p>
                            </div>
                            <img src={`${process.env.PUBLIC_URL}/img/a6e05-i715q.webp`} alt='news-page__about-img'></img>
                        </div>
                    </div>
                    {/* <div className="list-page__pg-btn">
                        {pageNumbers.map((number, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (number === "...") return;
                                    handlePageChange(number);
                                }}
                                disabled={number === "..."}
                                style={{
                                    fontWeight: currentPage === number ? "bold" : "normal",
                                }}
                            >
                                {number}
                            </button>
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default News;