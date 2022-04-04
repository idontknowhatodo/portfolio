import React from 'react'
import '../css/common.css';
import '../css/intropage.css';
import { Link } from "react-router-dom";

function Intropage() {
    return(
        <div className="intropage">
            <Link to="/home">
                <h1 className="fadein2">
                    @신윤희
                </h1>
                <h2 className="fadein">
                    Portfolio<br/>2022
                </h2>
            </Link>
        </div>
    );
}
export default Intropage;