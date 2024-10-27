import React, { useEffect } from 'react';

function Product(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const boxes = document.querySelectorAll('.product-page__text, .product-page__img, .product-target__content, .product-page__text-2, .product-page__img-2');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('product-page__text')) {
                        entry.target.classList.add('animate__fadeInUp');
                    } else if (entry.target.classList.contains('product-page__img')) {
                        entry.target.classList.add('animate__fadeInUp');
                    } else if (entry.target.classList.contains('product-target__content')) {
                        entry.target.classList.add('animate__fadeInUp');
                    } else if (entry.target.classList.contains('product-page__text-2')) {
                        entry.target.classList.add('animate__fadeIn');
                    } else if (entry.target.classList.contains('product-page__img-2')) {
                        entry.target.classList.add('animate__fadeInUp');
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
    return(
        <div>
            <div className="banner-page">
                <img src={`${process.env.PUBLIC_URL}/img/arye1-nbocu.webp`} alt="product-banner"></img>
            </div>
            <div className="product-page">
                <div className="product-page__content">
                    <div className="product-page__text">
                        <h1>IKOMA Supply You Better</h1>
                    </div>
                    <div className="product-page__img">
                        <img src={`${process.env.PUBLIC_URL}/img/a6f3o-z8724.webp`} alt="ikoma-swot-img"></img>
                    </div>
                </div>
            </div>
            <div className="product-page__line"></div>
            <div className="product-target">
                            <div className="product-target__content">
                <div className="product-target__text">
                    <div className="product-target__font">
                    <h2>
                    2 Series of 2 Basic Design
                    </h2>
                    <div className="product-page__smail-line"></div>
                    <p>
                    To lead at the forefront and meet international market demands.<br/>
                    Create winning solutions for both consumers and businesses.<br/>
                    Promote product competitiveness by means of efficient negotiations.<br/>
                    To strive for pragmatism, exert full potential and quality of product.<br/>
                    </p>
                    </div>
                </div>
                <div className="product-target__img">
                    <img src={`${process.env.PUBLIC_URL}/img/a3trl-jfmc6.webp`} alt="aqw5r-2t0j2"></img>
                </div>
            </div>
            <div className="product-target__content">
                <div className="product-target__text">
                    <div className="product-target__font">
                    <h2>
                    2 Series / 2 Basic design / To your Demand
                    </h2>
                    <div className="product-page__smail-line"></div>
                    <p>
                    To lead at the forefront and meet international market demands.<br/>
                    Create winning solutions for both consumers and businesses.<br/>
                    Promote product competitiveness by means of efficient negotiations.<br/>
                    To strive for pragmatism, exert full potential and quality of product.<br/>
                    </p>
                    </div>
                </div>
                <div className="product-target__img">
                    <img src={`${process.env.PUBLIC_URL}/img/a3trl-jfmc6.webp`} alt="aqw5r-2t0j2"></img>
                </div>
            </div>
            <div className="product-target__content">
                <div className="product-target__text">
                    <div className="product-target__font">
                    <h2>
                    2 Series / 2 Basic design / To your Demand
                    </h2>
                    <div className="product-page__smail-line"></div>
                    <p>
                    To lead at the forefront and meet international market demands.<br/>
                    Create winning solutions for both consumers and businesses.<br/>
                    Promote product competitiveness by means of efficient negotiations.<br/>
                    To strive for pragmatism, exert full potential and quality of product.<br/>
                    </p>
                    </div>
                </div>
                <div className="product-target__img">
                    <img src={`${process.env.PUBLIC_URL}/img/a3trl-jfmc6.webp`} alt="aqw5r-2t0j2"></img>
                </div>
            </div>
            </div>
            <div className="product-page__line"></div>
            <div className="product-page__inside">
                <div className="product-page__content">
                    <div className="product-page__text-2">
                        <h1>IKOMA Inside</h1>
                    </div>
                    <div className="product-page__img-2">
                        <img src={`${process.env.PUBLIC_URL}/img/ax5om-4mdw0.webp`} alt="ikoma-inside-img"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;