import React from 'react';
import Card from './card';

const Cards = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                <Card/>
                
                </div>            
            </div>
            <div className="row">
                <div className="col-md-4">
                <Card/>
                
                </div>            
            </div>
            <div className="row">
                <div className="col-md-4">
                <Card/>
                
                </div>            
            </div>
            <div className="row">
                <div className="col-md-4">
                <Card/>
                
                </div>            
            </div>
        </div>
    );
}

export default Cards;