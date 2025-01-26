import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const ResourcesList = () => {
  return (
    <div className='resources-list-container'>
        <ul className = "resrources-list">
            <li> 
                <Link to = "https://www.amazon.com/">Book</Link>
            </li>
            <li> 
                <Link to = "https://www.amazon.com/">Book</Link>
            </li>
            <li> 
                <Link to = "https://www.amazon.com/">Book</Link>
            </li> 
            <li>
                <Link to = "https://www.amazon.com/">Book</Link>  
            </li>
            <li>
                <Link to = "https://www.amazon.com/">Book</Link>
            </li>
        </ul>
    </div>
  )
}

export default ResourcesList
