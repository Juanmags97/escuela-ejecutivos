import React from 'react';
import Card from './card';

const Cards = ({card}) => {
    return (
        <div className='container '>
            <div className="row">
                <div className="col-md-4">
                <Card card={{name:"curso 1", estado:"en curso"}}/>
                
                </div>            
            </div>
            <div className="row">
                <div className="col-md-4">
                <Card card={{name:"curso 1", estado:"en curso"}}/>
                
                </div>            
            </div>
            <div className="row">
                <div className="col-md-4">
                <Card card={{name:"curso 1", estado:"en curso"}}/>
                
                </div>            
            </div>
            <div className="row">
                <div className="col-md-4">
                <Card card={{name:"curso 1", estado:"en curso"}}/>
                
                </div>            
            </div>
        </div>
    );
}

export default Cards;
