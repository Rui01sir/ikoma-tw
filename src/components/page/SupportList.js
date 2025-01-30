import React, { useState, useEffect } from 'react';
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

    // 定義所有資料
    const allData = {
        Toyota,
        Honda,
        Nissan,
        Mazda,
        Other
    };

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const brand = searchParams.get('brand');
    const data = brand ? allData[brand] || [] : Object.values(allData).flat();

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedDateRange, setSelectedDateRange] = useState('');
    const [selectedSeries, setSelectedSeries] = useState(''); // 改成選擇 Series

    const filterData = () => {
        return data.filter(item => {
            const searchMatch = Object.values(item).some(value => {
                return value && value.toString().toLowerCase().includes(searchTerm.toLowerCase());
            });

            const brandMatch = selectedBrand ? item.brand?.toLowerCase() === selectedBrand.toLowerCase() : true;
            const modelMatch = selectedModel ? item.model?.toLowerCase().includes(selectedModel.toLowerCase()) : true;
            const dateRangeMatch = selectedDateRange ? item.dateRange?.toLowerCase().includes(selectedDateRange.toLowerCase()) : true;
            const seriesMatch = selectedSeries ? item.series?.toLowerCase().includes(selectedSeries.toLowerCase()) : true; // 修改過濾條件為 series

            return searchMatch && brandMatch && modelMatch && dateRangeMatch && seriesMatch;
        });
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleBrandChange = (e) => {
        setSelectedBrand(e.target.value);
        setSelectedModel('');
        setSelectedDateRange('');
        setSelectedSeries(''); // 重設 series
    };

    const handleModelChange = (e) => {
        setSelectedModel(e.target.value);
    };

    const handleDateRangeChange = (e) => {
        setSelectedDateRange(e.target.value);
    };

    const handleSeriesChange = (e) => { // 修改為 series
        setSelectedSeries(e.target.value);
    };

    // 動態獲取品牌、型號、年份、Series
    const getBrands = () => {
        return [...new Set(data.map(item => item.brand))];
    };

    const getModels = (brand) => {
        return [...new Set(data.filter(item => item.brand === brand).map(item => item.model))];
    };

    const getDateRanges = (brand, model) => {
        return [...new Set(data.filter(item => item.brand === brand && item.model === model).map(item => item.dateRange))];
    };

    const getSeries = (brand, model, dateRange) => { // 修改為取得 series
        return [...new Set(data.filter(item => item.brand === brand && item.model === model && item.dateRange === dateRange).map(item => item.series))];
    };

    // 分頁功能
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const getPageNumbers = () => {
        const filteredData = filterData();
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
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

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedData = filterData().slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const pageNumbers = getPageNumbers();

    return (
        <div>
            <div className="list-page">
                <div className="banner-page">
                    <img src={`${process.env.PUBLIC_URL}/img/ayob3-z4y9t.webp`} alt="Company-banner" />
                </div>
                <div className="search-container">
                    <div className="search-cotainer__list">
                        <div className="search-cotainer__contact">
                            <h3>Search</h3>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <div className="search-cotainer__select">
                                {/* Brand選項 */}
                                <div className="search-cotainer__select-font">
                                    <h3>Brand</h3>
                                    <select value={selectedBrand} onChange={handleBrandChange}>
                                        <option value="">Select Brand</option>
                                        {getBrands().map((brand) => (
                                            <option key={brand} value={brand}>
                                                {brand}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Model選項 */}
                                <div className="search-cotainer__select-font">
                                    <h3>Model</h3>
                                    <select value={selectedModel} onChange={handleModelChange}>
                                        <option value="">Select Model</option>
                                        {selectedBrand && getModels(selectedBrand).map((model, index) => (
                                            <option key={index} value={model}>
                                                {model}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Year選項 */}
                                <div className="search-cotainer__select-font">
                                    <h3>Year</h3>
                                    <select value={selectedDateRange} onChange={handleDateRangeChange}>
                                        <option value="">Select Year</option>
                                        {selectedBrand && selectedModel && getDateRanges(selectedBrand, selectedModel).map((dateRange, index) => (
                                            <option key={index} value={dateRange}>
                                                {dateRange}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Series選項 */}
                                <div className="search-cotainer__select-font">
                                    <h3>Series</h3>
                                    <select value={selectedSeries} onChange={handleSeriesChange}>
                                        <option value="">Select Series</option>
                                        {selectedBrand && selectedModel && selectedDateRange && getSeries(selectedBrand, selectedModel, selectedDateRange).map((series, index) => (
                                            <option key={index} value={series}>
                                                {series}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-page__content">
                    <h1>SEARCH RESULTS</h1>
                </div>

                <div className="list-page__text">
                    <table>
                        <thead>
                            <tr className="list-page__brand">
                                <th>BRAND</th>
                                <th>MODEL</th>
                                <th>SERIES</th>
                                <th>DATE RANGE</th>
                                <th>IKOMA</th>
                                <th>KYB</th>
                                <th>OPTIONS</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.length === 0 ? (
                                <tr>
                                    <td colSpan="8">No results found</td>
                                </tr>
                            ) : (
                                paginatedData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.brand || "N/A"}</td>
                                        <td>{item.model || "N/A"}</td>
                                        <td>{item.series || "N/A"}</td> {/* 修改為 series */}
                                        <td>{item.dateRange || "N/A"}</td>
                                        <td>{item.ikoma || "N/A"}</td>
                                        <td>{item.kyb || "N/A"}</td>
                                        <td>{item.options || "No Options"}</td>
                                        <td>{item.action || "No Action"}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="list-page__pg-btn">
                    {pageNumbers.map((number, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (number === '...') return;
                                handlePageChange(number);
                            }}
                            disabled={number === '...'}
                            style={{
                                fontWeight: currentPage === number ? 'bold' : 'normal',
                                backgroundColor: currentPage === number ? 'orange' : '#D0D0D0',
                                color: '#3B322E',
                                border: 'none',
                                padding: '2%',
                                cursor: number === '...' ? 'default' : 'pointer',
                            }}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SupportList;