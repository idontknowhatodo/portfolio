import React from 'react'
import "../css/common.css";
import "../css/contact.css";
import { Link } from "react-router-dom";

function Contact() {
    return(
        <div className="whole">
            <div className="head">
                <div className="logo">
                    <Link to="/home"><h1>Portfolio</h1></Link>
                </div>
                <div className="menu">
                    <ul>
                        <Link to="/work">
                            <li>
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

            <div className="contact">
                <div>
                    <img src="../img/kakao.png" alt="kakao"/>
                    <p>▪ lightlitlit</p>
                </div>
                <div>
                    <img src="../img/email.png" alt="email"/>
                    <p><a href="mailto:light_litlit@naver.com">▪ light_litlit@naver.com</a></p>
                </div>
                <div>
                    <img src="../img/minigithub.png" alt="github"/>
                    <p><a href="https://github.com/idontknowhatodo" target="_blank" rel="noopener noreferrer">▪ github.com/idontknowhatodo</a></p>
                </div>
                <div>
                    <img src="../img/blog.png" alt="blog"/>
                    <p><a href="https://blog.naver.com/light_litlit" target="_blank" rel="noopener noreferrer">▪ blog.naver.com/light_litlit</a></p>
                </div>
            </div>
        </div>
    );
}
export default Contact;