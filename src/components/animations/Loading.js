import React, { useState, useEffect } from 'react';
import ProgressBar from './PorgressBar';

const Loading = ({ Component, onLoadingFinish }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    setTimeout(() => {
        setIsLoading(false);
    onLoadingFinish();
    }, 2000);
    }, [onLoadingFinish]);

    return (
        <div>
            {isLoading ? ( 
                <div className="loading-page">
                    <img src={`${process.env.PUBLIC_URL}/img/web-logo-n.svg`} alt='loading-logo'></img>
                    <ProgressBar />
                </div>
            ) :( 
                <Component/>
            )}
        </div>
    );
};

export default Loading;