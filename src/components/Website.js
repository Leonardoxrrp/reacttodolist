import React from 'react'
import {GrLinkedin} from 'react-icons/gr';
import "../Styles/website.css"


function Website() {
    return (
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leonardo-rojas-personal/">
            <GrLinkedin className="bottomLeft"/>
        </a>
    )
}

export default Website;
