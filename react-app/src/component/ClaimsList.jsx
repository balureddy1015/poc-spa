import React from 'react';
import * as singleSpa from 'single-spa';

export const ClaimList = () => {
    const onClick = () => {
        window.location.replace('https://single-spa.js.org/docs/api/');
      }

    return (
        <ul style={{listStyle: "none", margin: "30px -38px", width: "50%"}}>
            <li style={{border: "1px solid", padding: '10px'}} onClick={onClick}>
                <span>Garmin smart watch</span>
                <span style={{fontWeight: "bold", float: "right", cursor: "pointer"}}> -> </span>
            </li>
            <li style={{border: "1px solid", padding: '10px'}}>
                <span>Apple laptop </span>
                <span style={{fontWeight: "bold", float: "right", cursor: "pointer"}}> -> </span>
            </li>
            <li style={{border: "1px solid", padding: '10px'}}>
                <span>Amazon tablet</span>
                <span style={{fontWeight: "bold", float: "right", cursor: "pointer"}}> -> </span>
            </li>
        </ul>
    )
} 