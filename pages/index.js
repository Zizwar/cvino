import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Skills from '../component/skills';
import Works from '../component/works';
import Line from '../component/line';
import Experience from '../component/experience';
import { cv } from '../db/cv';
export default function Home() {
    return (
        <>
            <body>
                <div className="wrapper">
                    <div className="header">
                        <div className="photo" style={{ display: "none" }}>
                        </div>
                        <h1 className="quote">{cv.name}</h1>
                        <h3>- {cv.subName} -</h3>
                    </div>
                    <div className="side">
                        <div className="photo">
                        </div>
                        <div className="info">
                            <Line title={cv.info} />
                            <p>{cv.age}</p>
                            <p>{cv.birth}</p>
                            <p>{cv.mobile}</p>
                            <p> <a href={`mailto:${cv.mail}`}>{cv.mailbox} <i className="fa fa-link"></i></a></p>

                        </div>
                        <div className="skills">
                            {cv.skills.map(({ name = '', skill = [] }, index) => <Skills key={index} data={{ name, skill }} />)}

                            <p>---- / SCSS ［90%］</p>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box"></span>
                            <p>Javascript / jQuery ［40%］</p>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box"></span>
                            <span className="box"></span>
                            <span className="box"></span>
                            <span className="box"></span>
                            <span className="box"></span>
                            <br /><br />
                            <Line title={"Design"} />
                            <p>Subversion ［90%］</p>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box"></span>
                            <p>Adobe XD ［80%］</p>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box"></span>
                            <span className="box"></span>
                            <p>Sublime ［80%］</p>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box"></span>
                            <span className="box"></span>
                            <p>Photoshop ［90%］</p>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box"></span>
                            <p>Illustrator ［90%］</p>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box"></span>
                            <p>InDesign ［70%］</p>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box-ck"></span>
                            <span className="box"></span>
                            <span className="box"></span>
                            <span className="box"></span>
                            <Line title={"Other"} />
                            <p>Javascript</p>
                            <p>Vue.js</p>
                            <p>Git</p>
                            <p>Github</p>
                            <p>WordPress</p>

                            <Line title={"test"} />
                            <p>小提琴</p>
                            <p>吉他</p>
                            <p>游泳</p>
                        </div>
                    </div>
                    <div className="content">

                        <Line title={cv?.aboutMe[0]} />
                        <p>{cv.aboutMe[1]}</p>


                        <Line title={cv?.experiences?.title} />

                        {cv.experiences.items.map((item, index) => <Experience key={index} data={item} />)}

                        <Line title={"test3"} />
                         {cv.works.map((item, index) => <Works key={index} data={item} />)}
                        
                        <Line title={"test4"} />
                        <ul className="timeline">


                            <div className="event" data-date="2012-2009">
                                <h3>金甌女中 - 資料處理科</h3>
                                <li><a target="_blank" href="http://webftp.cogsh.tp.edu.tw/sallywei/homework/web/danshui/html/1-1.html">2012全國慈善/科技/人文網頁設計比賽 人文組 第三名 <i className="fa fa-link"></i></a>
                                    <li>技藝優良榮獲「傑出市長獎」畢業</li>
                                    <li>考取20張專業證照 全校最多</li>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

            </body>
        </>
    )
}
