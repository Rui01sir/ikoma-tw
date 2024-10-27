import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../animations/Carousel';

const News = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const navigate = useNavigate();
  
    const handleClick = (id) => {
        navigate(`/news/${id}`, { state: { refresh: true } });
    };

    return (
        <div>
            <div className="banner-page">
                <img src={`${process.env.PUBLIC_URL}/img/abprt-mh120.webp`} alt="Company-banner" />
            </div>
            <div className="news-page">
                <div className="news-page__carousel">
                    <Carousel />
                </div>
                <div className='news-page__contact'>
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
                        <div className='news-page__card-2'>
                            <img src={`${process.env.PUBLIC_URL}/img/a6e05-i715q.webp`} alt=''></img>
                            <div className='news-page__card-text'>
                                <h3>The product is guaranteed with rigorous engineer verification.</h3>
                                <p>The shock absorber modification market is large, but it also hides many substandard counterfeit products. A set of domestically produced shock absorbers starts at 30,000 TWD, while imported ones can range from 80,000 to 120,000 TWD.</p>
                                <a>#Engineer #CarefullySelected #Guaranteed</a>
                                <div className='news-page__btn clickable-div' onClick={() => handleClick(1)}>
                                    <p>Read more</p>
                                    <img src={`${process.env.PUBLIC_URL}/img/ayt9f-rc0z5.svg`} alt='news-page__btn'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;