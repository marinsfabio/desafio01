import React from "react";
import {AiOutlineHeart} from 'react-icons/ai'
import './Card.css'

export function Card(props) {
    return (
        <div className="section">
            <div className="card">
                <div className="text">
                    <p className="p">02 de jul, 2021</p>
                    <AiOutlineHeart />
                </div>
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
            </div>
        </div>
    )
} 