import React, { useEffect } from "react";

function Company(){
    useEffect(() => {
        const boxes = document.querySelectorAll('.company-page, .company-caption__text, .company-service, .company-target__box, .company-target__box-2, .company-target__text, .company-target__img, .company-caption__img, .company-service__box');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('company-page')) {
                        entry.target.classList.add('animate__fadeInUp');
                    } else if (entry.target.classList.contains('company-caption__text')) {
                        entry.target.classList.add('animate__fadeInUp');
                    } else if (entry.target.classList.contains('company-service')) {
                        entry.target.classList.add('animate__fadeIn');
                    } else if (entry.target.classList.contains('company-target__box')) {
                        entry.target.classList.add('animate__slideInLeft');
                    } else if (entry.target.classList.contains('company-target__box-2')) {
                        entry.target.classList.add('animate__slideInLeft');
                    } else if (entry.target.classList.contains('company-target__text')) {
                        entry.target.classList.add('animate__fadeInUp');
                    } else if (entry.target.classList.contains('company-target__img')) {
                        entry.target.classList.add('animate__fadeInUp');
                    } else if (entry.target.classList.contains('company-caption__img')) {
                        entry.target.classList.add('animate__fadeIn');
                    } else if (entry.target.classList.contains('company-service__box')) {
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
                <img src={`${process.env.PUBLIC_URL}/img/awd8n-r3zq7.webp`}  alt="Company-banner"></img>
            </div>
            {/* company-page */}
            <div className="company-page">
                <div className="company-page__content">
                    <div className="company-page__text">
                        <h2>IKOMA based in Taiwan</h2>
                        <p>All of our product conform to the latest international safety standards as we ll as ISO and QS 9000 systems. Meanwhile, to better safeguard the integrity and stability of our shock absorber. We only imports the best key parts and components from advance countries. Some of the vital elements include oil seals, o-rings, damping oil and so on.</p>
                    </div>
                    <div className="company-page__img">
                        <img src={`${process.env.PUBLIC_URL}/img/a8eoh-ju6uw.webp`}  alt="company-page__img"></img>
                    </div>
                </div>
            </div>
            {/* company-caption */}
            <div className="company-caption">
                <div className="company-caption__text">
                    <h2>We marketed and distributed exclusively under out brand name "IKOMA". </h2>
                    <p>Currently export destinations cover the world. Our products are mainly targeted at Japanese car model but are as well made available to serviceal European car makes. We absolutely supply good quality and comfort shock absorber to our customer.</p>
                </div>
                <div className="company-caption__img animate__animated animate__fadeIn">
                    <img src={`${process.env.PUBLIC_URL}/img/avy88-kk8hy.webp`}  alt="company-caption__img"></img>
                </div>
            </div>
            {/* company-service */}
            <div className="company-service">
                <div className="company-service__concent">
                    <div className="company-service__text">
                        <h2>
                            SERVICE
                        </h2>
                    </div>
                    <div className="company-service__img">
                        <div className="company-service__box">
                            <img src={`${process.env.PUBLIC_URL}/img/Auto-Shock-Absorbers.svg`} alt="aon0v-j1toy"></img>
                            <div className="company-service__box-text">
                                <h6>Auto Shock Absorbers</h6>
                            </div>
                        </div>
                        <div className="company-service__box">
                            <img src={`${process.env.PUBLIC_URL}/img/Shock-Absorber-Accessories.svg`} alt="a3syw-manln"></img>
                            <div className="company-service__box-text">
                                <h6>Shock Absorber Accessories</h6>
                            </div>
                        </div>
                        <div className="company-service__box">
                            <img src={`${process.env.PUBLIC_URL}/img/OEM-for-Own-Brand.svg`} alt="ae76v-fgngb"></img>
                            <div className="company-service__box-text">
                                <h6>OEM for Own Brand</h6>
                            </div>
                        </div>
                        <div className="company-service__box">
                            <img src={`${process.env.PUBLIC_URL}/img/Retail&Wholesale-for-ShoppingMall.svg`} alt="arwge-95coa"></img>
                            <div className="company-service__box-text">
                                <h6>Retail & Wholesale for Shopping Mall</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* company-target */}
            <div className="company-target">
                <div className="company-target__box">
                    <img src={`${process.env.PUBLIC_URL}/img/a4yhc-u70on.svg`}  alt="a4yhc-u70on"></img>
                </div>
                <div className="company-target__content">
                <div className="company-target__text">
                    <div className="company-target__font">
                    <h2>
                    Our Ambition
                    </h2>
                    <p>
                    To lead at the forefront and meet international market demands.
                    Create winning solutions for both consumers and businesses.
                    Promote product competitiveness by means of efficient negotiations.
                    To strive for pragmatism, exert full potential and quality of product.
                    </p>
                    </div>
                </div>
                {/* <div className="company-target__img">
                    <img src={`${process.env.PUBLIC_URL}/img/aqw5r-2t0j2.webp`} alt="aqw5r-2t0j2"></img>
                </div> */}
                </div>
                <div className="company-target__box-2">
                    <img src={`${process.env.PUBLIC_URL}/img/a4yhc-u70on.svg`} alt="a4yhc-u70on"></img>
                </div>
            </div>
        </div>
    );
}

export default Company;