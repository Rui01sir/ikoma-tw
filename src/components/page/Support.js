import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Toyota from '../database/Toyota.js';
import Honda from '../database/Honda.js'; 
import Nissan from '../database/Nissan.js';
import Mazda from '../database/Mazda.js';
import Other from '../database/Other.js';

const Support = () => {
    const navigate = useNavigate();

    const handleBrandClick = (brand) => {
        navigate(`/list?brand=${brand}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div>
            <div className="banner-page">
                <img src={`${process.env.PUBLIC_URL}/img/ayob3-z4y9t.webp`}  alt="Company-banner"></img>
            </div>
            <div className="support-page">
                <div className="support-page__content">
                    <div className='support-page__text'>
                        <h2>Choose the brand you<br/> 
                        want to learn about.</h2>
                    </div>
                    <div className='support-page__box-1'>
                        <div className='support-page__carbrand-1 clickable-div' onClick={() => handleBrandClick('Toyota')}>
                            <div className='support-page__carbrand-text'>
                                {/* <h1>豐田</h1> */}
                                <h2>TOYOTA</h2>
                            </div>
                            <div className='support-products'>
                                <p>{Toyota.length} products</p>
                            </div>
                        </div>
                        <div className='support-page__carbrand-2 clickable-div' onClick={() => handleBrandClick('Honda')}>
                            <div className='support-page__carbrand-text'>
                                {/* <h1>本田</h1> */}
                                <h2>HONDA</h2>
                            </div>
                            <div className='support-products'>
                                <p>{Honda.length} products</p>
                            </div>
                        </div>
                    </div>
                    <div className='support-page__box-2'>
                        <div className='support-page__carbrand-3 clickable-div' onClick={() => handleBrandClick('Nissan')}>
                            <div className='support-page__carbrand-text'>
                                {/* <h1>日產</h1> */}
                                <h2>NISSAN</h2>
                            </div>
                            <div className='support-products'>
                                <p>{Nissan.length} products</p>
                            </div>
                        </div>
                        <div className='support-page__carbrand-4 clickable-div' onClick={() => handleBrandClick('Mazda')}>
                            <div className='support-page__carbrand-text'>
                                {/* <h1>馬自達</h1> */}
                                <h2>MAZDA</h2>
                            </div>
                            <div className='support-products'>
                                <p>{Mazda.length} products</p>
                            </div>
                        </div>
                        <div className='support-page__carbrand-5 clickable-div' onClick={() => handleBrandClick('Other')}>
                            <div className='support-page__carbrand-text'>
                                {/* <h1>其他</h1> */}
                                <h2>OTHER</h2>
                            </div>
                            <div className='support-products'>
                                <p>{Other.length} products</p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;
