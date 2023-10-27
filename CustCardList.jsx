import React from "react"

import CustCard from './CustCard'
import custList from './custList'
import './Card.css'

function cardComponent (cust, i)
{
    if (i < 3)
    {
        return <CustCard
            key = {cust.key}
            avatar = {cust.avatar}
            name = {cust.name}
            position = {cust.position}
            rating = {cust.rating}
            author = {cust.author}
        />
    }
}

const CustCardList = () => 
{
    return <div>
        <h1>Featured Tutorials</h1>
        <div className="row">
            {custList.map(cardComponent)}
        </div>
        <button class="btn btn-secondary">see all tutorial</button>
    </div>
}

export default CustCardList