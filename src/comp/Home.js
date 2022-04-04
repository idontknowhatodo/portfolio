import React from 'react'
import "../css/common.css";
import "../css/home.css";
import { Link } from "react-router-dom";

function Home() {
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

            <div className="main">
                <div className="text">
                    <p className="fadein">
                        안녕하세요!<br/>
                        신입 퍼블리셔 & 프론트엔드 개발자<br/>
                        신 윤희입니다.<br/>
                    </p>
                    <p className="fadein">
                    웹 개발을 공부하면서, 각각의 웹사이트들이 가상공간에 존재하는 '방(room)'같다는 생각이 많이 들었어요.<br/>
                    현실과 다르게 평수로 구분되지 않고 내가 원하는 대로 늘려갈 수 있는,<br/>
                    친구들도 많이 놀다 갈 수 있는 그런 방이요.<br/>
                    <br/>
                    또한 방에는 주인의 취향이나 추구하는 생각들이 많이 담기기 마련이잖아요!<br/>
                    이러한 생각을 저의 포트폴리오에 녹여냈습니다.<br/>
                    </p>
                </div>
                <img src="./img/dooropen.png" alt="door"/>
            </div>

            {/* <div className="slide">
                <div className="workthumb">
                    <img src="./img/mainimg3.jpg" alt="slou"/>
                    <h2>Slou</h2>
                    <p>HTML, CSS, JavaScript</p>
                </div>
                <div className="workthumb">
                    <img src="./img/mainimg4.jpg" alt="binggrae"/>
                    <h2>Binggrae</h2>
                    <p>HTML, CSS, JavaScript</p>
                </div>
                <div className="workthumb">
                    <img src="./img/mainimg5.jpg" alt="diary"/>
                    <h2>Diary</h2>
                    <p>HTML, CSS, JavaScript, PHP</p>
                </div>
                <div className="workthumb">
                    <img src="./img/mainimg6.jpg" alt="movie"/>
                    <h2>Movie</h2>
                    <p>HTML, CSS, JavaScript, React, Firebase</p>
                </div>
            </div> */}
            {/* <div className="topbtn">
                <a href="#!">
                    Top
                </a>
            </div> */}
        </div>
    );
}

export default Home;