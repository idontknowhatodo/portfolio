import React from 'react'
import "../css/common.css";
import "../css/about.css";
import { Link } from "react-router-dom";


function About() {
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

            <div className="info">
                <img src="../img/me.jpeg" alt="me" title="It's me!"/>
                <div className="text">
                    <p>
                        Just Do It.
                    </p>
                    <p>
                        <br/>모두가 들으면 떠올릴 스포츠 브랜드의  슬로건입니다.<br/>
                        저는 이 말을 참 좋아합니다!<br/>
                        묻고 따지지도 말고 그냥 해보라는 말이 묘한 자신감을 생기게 한달까요?<br/>
                        <br/>웹은 어떻게 만들어질까?라는 단순한 호기심에서 시작된 질문을 시작으로<br/>
                        html을 공부하기 시작했습니다.<br/>
                        <br/>just do it 정신으로 도전한 공부에서,<br/>
                        이제는 신입 개발자로 한 번 더 도전하고자 합니다.<br/>
                        <br/>저는 ‘소통하는 퍼블리셔’가 되는 것이 목표입니다.<br/>
                        웹사이트를 이용하는 사용자들, 같이 일하는 팀원들,<br/>
                        컴퓨터와 소통하는 퍼블리셔가 되겠습니다!<br/>
                    </p>
                    <div className="myself">
                        <p>
                            신윤희 (Shin YunHui)<br/>
                            1996.06.07<br/>
                        </p>
                        <div className="history">
                            <span className="a"></span>
                            <span className="b"></span>
                            <span className="c"></span>
                            <span className="d"></span>
                            <span className="e"></span>
                        </div>
                        <div className="years">
                            <span className="a">
                                2015
                                <br/>조치원여자<br/>고등학교<br/>졸업
                            </span>
                            <span className="b">
                                2016.4
                                <br/>MSS<br/>logistics<br/>입사
                            </span>
                            <span className="c">
                                2017.8
                                <br/>MSS<br/>logistics<br/>퇴사
                            </span>
                            <span className="d">
                                2019
                                <br/>ncs<br/>그래픽디자이너<br/>양성과정수료
                            </span>
                            <span className="e">
                                2022
                                <br/>ncs<br/>프론트엔드개발<br/>양성과정수료
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills">
                <h2>Skills & Experience</h2>
                <div className="parts">
                    <div className="part">
                        <div className="logo">
                            <img src="../img/html.png" alt="html"/>
                            <p>HTML</p>
                            <p>
                                웹 페이지의 구조를 이해하고 있으며,<br/>태그ㆍ하이퍼링크 등을 사용해 화면을 구현합니다.<br/>
                                웹 표준에 맞추어 HTML 언어를 사용합니다.
                            </p>
                        </div>
                        <div className="logo">
                            <img src="../img/css.png" alt="css"/>
                            <img src="../img/sass.png" alt="sass"/>
                            <p>CSSㆍSass</p>
                            <p>
                                HTML 문서에 있는 요소에 CSS를 사용하여<br/>다양한 스타일과 레이아웃을 적용할 수 있습니다.<br/>
                                Sass를 css로 컴파일하고 유지 보수가 용이하게<br/>스타일 시트를 관리할 수 있습니다.
                            </p>
                        </div>
                        <div className="logo">
                            <img src="../img/javascript.png" alt="js"/>
                            <img src="../img/jquery.png" alt="jq"/>
                            <p>JavaScriptㆍjQuery</p>
                            <p>
                                JavaScriptㆍjQuery의 구성요소를 활용해<br/>동적기능을 구현할 수 있습니다.<br/>
                                변수ㆍ함수ㆍ메서드 등을 사용하여<br/>화면을 다채롭게 만들 수 있습니다.
                            </p>
                        </div>
                        <div className="logo">
                            <img src="../img/photoshop.png" alt="photoshop"/>
                            <p>Photoshop</p>
                            <p>
                                이미지 합성ㆍ편집이 가능합니다.
                            </p>
                        </div>
                    </div>
                    <div className="part">
                        <div className="logo">
                            <img src="../img/react.png" alt="react"/>
                            <p>React</p>
                            <p>
                                React 프레임워크에 대해 학습하였고,<br/>싱글 웹페이지 작업이 가능합니다. 
                            </p>
                        </div>
                        <div className="logo">
                            <img src="../img/mysql.png" alt="mysql"/>
                            <img src="../img/php.png" alt="php"/>
                            <p>MySQLㆍPHP</p>
                            <p>
                                데이터 베이스 접근ㆍ관리가 가능합니다.
                            </p>
                        </div>
                        <div className="logo">
                            <img src="../img/github.png" alt="github"/>
                            <p>GitHub</p>
                            <p>
                                공부했던 코드 소스ㆍ과제물ㆍ프로젝트를 저장하고,<br/>기록들을 관리할 수 있습니다.
                            </p>
                        </div>
                        <div className="logo">
                            <img src="../img/firebase.png" alt="firebase"/>
                            <p>Firebase</p>
                            <p>
                                Firebase 저장소를 사용하고 호스팅 등의<br/>기능을 경험해 봤습니다. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;