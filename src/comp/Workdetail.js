import React from 'react'
import "../css/common.css";
import "../css/workdetail.css";
import { Link, useParams } from "react-router-dom";
import work from "../work.json";
import { useEffect, useState } from "react";

function Workdetail() {
    const {id} = useParams();
    const [data,setdata] = useState('');

    useEffect(()=>{
        setdata(work[id]);
    },[]);

    return(
        <div className="detail">
            <div className="head">
                <div className="logo">
                    <Link to="/home"><h1>Portfolio</h1></Link>
                </div>
                <div className="menu">
                    <ul>
                        <Link to="/work">
                            <li className="menu1">
                                Work
                            </li>
                        </Link>
                        <Link to="/about">
                            <li>
                                About
                            </li>
                        </Link>
                        <Link to="/contact">
                            <li>
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>

            <div className="work">
                <div className="explain">
                    <h2>{data.title}</h2>
                    <ul>
                        <li>type : {data.type}</li>
                        <li>use : {data.use}</li>
                        <li>period : {data.period}</li>
                        <li>link : {data.address}</li>
                    </ul>
                </div>
                <div className="screen">
                    <img src={data.screenshot} alt=""/>
                </div>
                {/* <button>list</button> */}
            </div>
        </div>
    );
}
export default Workdetail;