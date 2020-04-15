import React from 'react';
import { Link } from "gatsby"

const Services = () => {

    return (
        <div>
            <h1>Services </h1>
            <ul>
                <li>service 1</li>
                <li>service 2</li>
                <li>service 3</li>
            </ul>
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default Services