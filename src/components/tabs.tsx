import React, { useState } from 'react';
import { productData } from '../coffees';
import Card from './card';

const Tabs = () => {
    const { coffees } = productData;

    const [activeTab, setActiveTab] = useState<string>('all');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const filteredProducts =
        activeTab === 'available' ? coffees.filter((coffee) => coffee.availability) : coffees;

    return (
        <div className="tabs">
            <div className="tabs__header">
                <button
                    className={`tabs__btn ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => handleTabClick('all')}>
                    All Products
                </button>
                <button
                    className={`tabs__btn ${activeTab === 'available' ? 'active' : ''}`}
                    onClick={() => handleTabClick('available')}>
                    Available Products
                </button>
            </div>
            <div className="tabs__body">
                <div className="list">
                    {filteredProducts.map((product, index) => (
                        <Card key={index} coffee={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
