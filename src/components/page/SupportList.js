import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Toyota from '../database/Toyota.js';
import Honda from '../database/Honda.js'; 
import Nissan from '../database/Nissan.js';
import Mazda from '../database/Mazda.js';
import Other from '../database/Other.js';

const SupportList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const brand = searchParams.get('brand');

    const allData = {
        Toyota,
        Honda,
        Nissan,
        Mazda,
        Other
    };

    const data = allData[brand] || [];

    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const filteredData = data.filter(item => 
        item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.series.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getPageNumbers = () => {
        const pageNumbers = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div>
            <div className='list-page'>
                <div className="banner-page">
                    <img src={`${process.env.PUBLIC_URL}/img/ayob3-z4y9t.webp`} alt="Company-banner" />
                </div>
                <div className='list-page__content'>
                    <h1>{brand}</h1>
                    <div className='list-page__search'>
                        <img src={`${process.env.PUBLIC_URL}/img/search-icon.svg`} alt="search-icon" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearch}
                            placeholder="Search"
                            style={{ outline: 'none' }}
                        />
                    </div>
                </div>
                <div className='list-page__text'>
                    <table>
                        <thead>
                            <tr className='list-page__brand'>
                                <th>BRAND</th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>IKOMA</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>KYB</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((item, index) => (
                                <React.Fragment key={index}>
                                    <tr>
                                        <td>{item.brand}</td>
                                        <td>{item.model}</td>
                                        <td>{item.series}</td>
                                        <td>{item.dateRange}</td>
                                        <td>{item.ikoma}</td>
                                        <td>{item.kyb}</td>
                                        <td>{item['']}</td>
                                        <td>{item.kyb}</td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                    <div className='list-page__pg-btn'>
                        {pageNumbers.map((number, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (number === '...') return;
                                    handlePageChange(number);
                                }}
                                disabled={number === '...'}
                                style={{ fontWeight: currentPage === number ? 'bold' : 'normal' }}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportList;