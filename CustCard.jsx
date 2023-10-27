import React from 'react';
import './Card.css';

const CustCard = (props) => {
    return (
        <div className={`column col-sm-4 ${props.positionClass}`}>
            <img className='card-img' src={props.avatar} alt="staff" />
            <h3>{props.name}</h3>
            <p>{props.position}</p>
            <div className = 'rating'>
            <p>{props.rating}</p>
            <div classname ="author">
                <p>{props.author}</p>
            </div>
        </div>
        </div>
    );
}

export default CustCard;
