import React, { useEffect } from 'react';
import { useParams, useLocation,Link } from 'react-router-dom';
import NewsData from '../database/NewsData';

const NewsDetail = () => {
    const handleShare = async () => {
        const shareData = {
            title: "Check this out!",
            text: "Here is an amazing website you should see.",
            url: window.location.href, // 獲取目前頁面網址
        };
    
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
          // 如果瀏覽器不支援 Web Share API，提供備案
            navigator.clipboard.writeText(shareData.url).then(() => {
            alert("Link copied to clipboard!");
            });
        }
    };
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const { id } = useParams();
    const location = useLocation();
    const newsItem = NewsData.find(item => item.id === parseInt(id));

    useEffect(() => {
        if (location.state && location.state.refresh) {
            console.log('Page refreshed due to state');
        }
    }, [location.state]);

    if (!newsItem) {
        return <div>新聞未找到</div>;
    }

    return (
        <div>
            <div className="banner-page">
                <img src={`${process.env.PUBLIC_URL}/img/af10w-qp20u.webp`} alt="Company-banner" />
            </div>
            <div className="news-detail">
                <h1 className="news-title">{newsItem.title}</h1>
                <div className='news-contact'>
                    <p className="news-date">{newsItem.date}</p>
                    <div className='news-icon'>
                        <ul>
                            <li><a href="https://www.instagram.com/"><img src={`${process.env.PUBLIC_URL}/img/instagram.webp`} alt="instagram-icon" /></a></li>
                            <li><a href="mailto:ikoma@ikoma-tw.com"><img src={`${process.env.PUBLIC_URL}/img/email.webp`} alt="email-icon" /></a></li>
                            <li><a href="https://www.facebook.com/"><img src={`${process.env.PUBLIC_URL}/img/facebook.webp`} alt="facebook-icon" /></a></li>
                            <li><a href="https://www.whatsapp.com/"><img src={`${process.env.PUBLIC_URL}/img/whatapp.webp`} alt="whatsapp-icon" /></a></li>
                            <li>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleShare(); }}>
                                    <img src={`${process.env.PUBLIC_URL}/img/share-icon.webp`} alt="share-icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src={newsItem.imageUrl} alt="News" className="news-image" />
                <p className="news-content">{newsItem.content1}</p>
                <img src={newsItem.imageUrl2} alt="News" className="news-image" />
                <p className="news-content">{newsItem.content2}</p>
                <div className="news-content__btn">
                    <Link to="/News" alt="back-Homepage">
                        <img src={`${process.env.PUBLIC_URL}/img/back-icon.svg`} alt="back-icon" />
                        BACK
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;