import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Product() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate(); // 用來導航到其他頁面

    const handleBrandClick = (name) => {
        const encodedName = encodeURIComponent(name); // 將名稱編碼為合法的 URL 格式
        navigate(`/product/${encodedName}`, { state: { refresh: true } });
    };
    
    useEffect(() => {
        const boxes = document.querySelectorAll('.product-page__text, .product-page__seleciton, .product-page__img, .product-target__content, .product-page__text-2, .product-page__img-2');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('product-page__text')) {
                        entry.target.classList.add('animate__fadeInUp');
                    } else if (entry.target.classList.contains('product-page__seleciton')) {
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
                <img src={`${process.env.PUBLIC_URL}/img/ac3nu-5l52e.webp`} alt="product-banner"></img>
            </div>
            <div className="product-page">
                <div className="product-page__content">
                    <div className="product-page__text">
                        <h1>IKOMA  SELECITON</h1>
                    </div>
                    <div className="product-page__seleciton">
                        <h2>Twin  Tube  System</h2>
                            <div className='product-page__box-list'>
                                <div className='product-page__box'>
                                    <div className='product-page__box-img'>
                                    <img src={`${process.env.PUBLIC_URL}/img/aa4eb-9ylb7.webp`} alt="pcl-img"></img>
                                    <img src={`${process.env.PUBLIC_URL}/img/abel0-g1y7f.webp`} alt="pcl-x-img"></img>
                                    </div>
                                    <p>Durable Stable Comfortable</p>
                                </div>
                            </div>
                        <h2>Mono  Tube  System </h2>
                            <div className='product-page__box-list'>
                                <div className='product-page__box'>
                                    <div className='product-page__box-img'>
                                    <img src={`${process.env.PUBLIC_URL}/img/a7063-lqqsr.webp`} alt="pci-img"></img>
                                    <img src={`${process.env.PUBLIC_URL}/img/a6nkv-0rsn8.webp`} alt="pci-x-img"></img>
                                    </div>
                                    <p>Durable Stable Comfortable</p>
                                </div>
                            </div>
                        {/* <img src={`${process.env.PUBLIC_URL}/img/a6f3o-z8724.webp`} alt="ikoma-swot-img"></img> */}
                    </div>
                </div>
            </div>
            <div className="product-target">
            <div className="product-page__line"></div>
            <div className="product-target__content-list clickable-div" onClick={() => handleBrandClick("PCL SERIES")}>
            <div className="product-target__content" >
                    <div className="product-target__text">
                        <div className="product-target__next">
                            <img src={`${process.env.PUBLIC_URL}/img/product-next.svg`} alt="product-next-icon"></img>
                        </div>
                            <div className='product-target__list-box'>
                                <div className='product-target__list'>
                                    <img src={`${process.env.PUBLIC_URL}/img/aa4eb-9ylb7.webp`} alt="pcl-img"></img>
                                    <div className='product-target__list-font'>
                                        <p>Passenger Cars</p>
                                        <p>Minivans</p>
                                        <p>SUV</p>
                                    </div>
                                </div>
                                <div className='product-target__list-text'>
                                    <h2>PCL SERIES</h2>
                                    <p>IKOMA STANDARD ABSORBER WITH TWIN-TUBE SYSTEM.</p>
                                </div>
                            </div>
                        </div>
                <div className="product-target__img">
                    <img src={`${process.env.PUBLIC_URL}/img/aaxlv-9kdrd.webp`} alt="aaxlv-9kdrd"></img>
                </div>
                </div>
                </div>
                <div className="product-page__line"></div>
                <div className="product-target__content-list clickable-div" onClick={() => handleBrandClick("PCI SERIES")}>
                <div className="product-target__content">
                    <div className="product-target__text">
                        <div className="product-target__next">
                            <img src={`${process.env.PUBLIC_URL}/img/product-next.svg`} alt="product-next-icon"></img>
                        </div>
                            <div className='product-target__list-box'>
                                <div className='product-target__list'>
                                    <img src={`${process.env.PUBLIC_URL}/img/abel0-g1y7f.webp`} alt="pcl-x-img"></img>
                                    <div className='product-target__list-font'>
                                        <p>SUV</p>
                                        <p>Trucks</p>
                                    </div>
                                </div>
                                <div className='product-target__list-text'>
                                    <h2>PCI SERIES</h2>
                                    <p>IKOMA PERFORMANCE SHOCK ABSORBER WITH MONO-TYBE SYSTEM.</p>
                                </div>
                            </div>
                        </div>
                <div className="product-target__img">
                    <img src={`${process.env.PUBLIC_URL}/img/ad7mn-2ubs8.webp`} alt="ad7mn-2ubs8"></img>
                </div>
                </div>
                </div>
                <div className="product-page__line"></div>
                <div className="product-target__content-list clickable-div" onClick={() => handleBrandClick("PCL-X SERIES")}>
                <div className="product-target__content">
                    <div className="product-target__text">
                        <div className="product-target__next">
                            <img src={`${process.env.PUBLIC_URL}/img/product-next.svg`} alt="product-next-icon"></img>
                        </div>
                            <div className='product-target__list-box'>
                                <div className='product-target__list'>
                                    <img src={`${process.env.PUBLIC_URL}/img/a7063-lqqsr.webp`} alt="pci-img"></img>
                                    <img src={`${process.env.PUBLIC_URL}/img/a6nkv-0rsn8.webp`} alt="pci-x-img"></img>
                                    <div className='product-target__list-font'>
                                        <p>Passenger Cars</p>
                                        <p>Minivans</p>
                                        <p>SUV</p>
                                    </div>
                                </div>
                                <div className='product-target__list-text'>
                                    <h2>PCL SERIES</h2>
                                    <p>IKOMA STANDARD ABSORBER WITH TWIN-TUBE SYSTEM.</p>
                                </div>
                            </div>
                        </div>
                <div className="product-target__img">
                    <img src={`${process.env.PUBLIC_URL}/img/a3bed-gcoow.webp`} alt="a3bed-gcoow"></img>
                </div>
                </div>
                </div>
            </div>
            <div className="product-page__line"></div>

            {/* ikoma-inside */}
            <div className="product-page__inside">
                <div className="product-page__content">
                    <div className="product-page__text-2">
                        <h1>IKOMA</h1>
                        <p>Inside</p>
                    </div>
                    {/* <div className="product-page__line-2"></div> */}
                    <div className="product-page__img-2">
                        <h2>CNC Machinery</h2>
                        <div className='product-page__img-list'>
                            <div className="product-page__img-box">
                                <img src={`${process.env.PUBLIC_URL}/img/au35n-tx58y.webp`} alt="au35n-tx58y"></img>
                                <img src={`${process.env.PUBLIC_URL}/img/auf4h-rklrs.webp`} alt="auf4h-rklrs"></img>
                            </div>
                            <div className="product-page__img-text">
                                <p>Most Major Key Components have made by internal CNC dept of
                                IKOMA factories. To make 100 percent quality control and demand, IKOMA has strict procedures controlling from raw material quality to roughness of surface. ISO international quality control system let all colleagues have same high standard operation for each stage.</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-page__line-2"></div>
                    <div className="product-page__img-2">
                        <h2>Piston Rod</h2>
                        <div className='product-page__img-list'>
                            <div className="product-page__img-box-2">
                                <img src={`${process.env.PUBLIC_URL}/img/a0v7l-1th8q.webp`} alt="a0v7l-1th8q"></img>
                            </div>
                            <div className="product-page__img-text">
                                <p>IKOMA has been made for piston rod and shock absorber related field for over 30 years already. At least 15 stages of producing procedure and strict checking and demands for degree of roundness, roughness and hardness of raw material. IKOMA make the best piston rod then applying on IKOMA shock absorber.</p>
                                <p>Shabby piston rod can reduce the cost of finish work absorber obviously. But also major factor of poor durability and performance of a bad shock absorber.
                                Outstanding quality IKOMA always make and use the best piston rod for the core of shock absorber.</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-page__line-2"></div>
                    <div className="product-page__img-2">
                        <h2>Major Components</h2>
                        <div className='product-page__img-list'>
                            <div className="product-page__img-box-2">
                                <img src={`${process.env.PUBLIC_URL}/img/akd5n-4rmwx.webp`} alt="akd5n-4rmwx"></img>
                                <img src={`${process.env.PUBLIC_URL}/img/a0ih8-n5t4k.webp`} alt="a0ih8-n5t4k"></img>
                            </div>
                            <div className="product-page__img-text">
                                <p>Each piece of IKOMA shock absorber need to be checked and inspected by welding point and oil quality and quantity checking, damper force testing, fitment checking....etc. IKOMA try best to delivery all the finished work to customer place in perfect condition.</p>
                                <p>During assembling line, to prevent the pollutions into the line as possible.
                                Including the washing of piston and valves. Put high standard damper oil into oil tube. Purify and Clean inside of oil tube will make the best quality of IKOMA shock absorber.</p>
                                <p>IKOMA use over 3 kinds different damper oil for suitable of extreme wild field or surroundings. For example for under minus 40 degree cold temperature and un-paved road conditions. All of them are ultimate testing for shock absorber. IKOMA can be satisfied by all customers who were in the worst conditons for using shock absorbers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-page__line-2"></div>
                    <div className="product-page__img-2">
                        <h2>Accessories</h2>
                        <div className='product-page__img-list'>
                            <div className="product-page__img-box">
                                <img src={`${process.env.PUBLIC_URL}/img/aueq0-fyv62.webp`} alt="aueq0-fyv62"></img>
                                <img src={`${process.env.PUBLIC_URL}/img/al8p1-5zhrl.webp`} alt="al8p1-5zhrl"></img>
                            </div>
                            <div className="product-page__img-text">
                                <p>Accessories for shock absorber are also important for each different chassis or suspension type. Fasten components or rubber materials as buffer materials. Not only install on car but also need the best fitting on the car and the requirement of driving surrounding. All accessories need to have most durability under the high temperature, vibration, object impact, rain or water so many elements. Each one has damaged will cause the concerning of car safety.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;