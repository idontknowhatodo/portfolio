import React from 'react'
import "../css/common.css";
import "../css/work.css";
import { Link } from "react-router-dom";
import work from "../work.json";
import { useEffect, useState } from "react";

function Work() {
    const [workdata,setworkdata] = useState([]);

    useEffect(()=>{
        let data = [];
        for(let i in work){
            data.push(work[i]);
        }
        setworkdata(data);
    },[]);
    
    console.log(workdata)

    return(
        <div className="whole">
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
                <div className="workthumb">
                    {
                        workdata.map((v,k)=>(
                            <figure key={k}>
                                <Link to={`/workdetail/${v.title}`}>
                                    <img src={v.thumb} alt=""/>
                                </Link>
                                <h2>{v.title}</h2>
                                <p>{v.use}</p>
                            </figure>
                        ))
                    }
                </div>
            </div>

            {/* <div className="topbtn">
                <a href="#!">
                    Top
                </a>
            </div> */}
        </div>
    );
}
export default Work;