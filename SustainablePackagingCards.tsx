import React, { useState } from 'react';
import './sustainablePackagingCard.scss';
import result_hint_icon from "./../../../assets/images/result_hint_icon.png"; // Your hint icon image
import full_arrow_right_small from "./../../../assets/images/full_arrow_right_small.png";
import arrow_full_small_up_green from "./../../../assets/images/arrow_full_small_up_green.png";


// Sample data for tabs
const tabsData = [
    {
        heading: 'Total Score',
        value: 30,
        seeDetailsLink: "See Details",
        isSelected: true,
    },
    {
        heading: 'PCR Content',
        value: '+35%',
        baselineProduct: '50%',
        myProduct: '85%',
        seeDetailsLink: "See Details",
    },
    {
        heading: 'Material Efficiency',
        value: '-3%',
        baselineProduct: '0.59 g per dose',
        myProduct: '0.59 g per dose',
        seeDetailsLink: "See Details",
    },
    {
        heading: 'Recycle Ready',
        value: '+80%',
        baselineProduct: '20%',
        myProduct: '100%',
        seeDetailsLink: "See Details",
    },
    {
        heading: 'Recyclability Disruptors',
        value: 'Pass',
        baselineProduct: 'Pass',
        myProduct: 'Pass',
        seeDetailsLink: "See Details",
    }
];

const SustainablePackagingCards = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (index: number) => {
        setSelectedTab(index);
    };

    return (
        <div className="sustainable-card-container">
            <div className="hint-section">
                <div className="hint-row">
                    <img src={result_hint_icon} alt="Hint Icon" className="hint-icon" />
                    <div className="hint-text">
                        <span>Which area should I focus on?</span>
                    </div>
                </div>
                <p className="subtext">Explore each tab to dive deeper into your data and uncover valuable insights to drive informed decisions.</p>
            </div>
            <div className="tabs-section">
                {tabsData.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab-card ${selectedTab === index ? 'selected' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        <div className="table-details">
                            <div><h1>{tab.heading}</h1></div>
                        <div className="tab-value-row">
                        
                            <p className='tabValue'>{tab.value}</p>
                            <img src={arrow_full_small_up_green}  alt="Arrow" />

                        </div>
                        
                        {tab.baselineProduct && tab.myProduct && (
                            <div className="product-info">
                                <div className="product-column">
                                    
                                    <span className='dot_grey_small_baseline_result_page'></span>
                                    <span className="product-label">Baseline Product</span>
                                   

                                    <span className="product-value">{tab.baselineProduct}</span>
                                </div>
                                <div className="product-column">
                                    <span className='dot_grey_small_myproduct_result_page'></span>
                                    <span className="product-label">My Product</span>
                                    <span className="product-value">{tab.myProduct}</span>
                                </div>
                            </div>
                        )}
                        </div>


                        <div className='SeeDetailsTab'>
                            <div className='SeeDetailRow'>
                                <a href="#" className="see-details">{tab.seeDetailsLink}</a>
                                <img src={full_arrow_right_small} alt="Arrow" />
                            </div>
                        </div>

                    </div>
                ))}

            </div>
            <p className="subtext">Please note that the scores displayed cover all packaging received by the Consumer i.e. Primary and Secondary packaging.</p>


        </div>
    );
};

export default SustainablePackagingCards;
