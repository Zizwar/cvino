import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Skill from '../component/skill';
import Experience from '../component/experience';
import { cv } from '../db/cv';
export default function Home() {
    return (
        <>
            <Head>

                <title>Ibrahim BIDI</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            </Head>

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
                            <h2>{cv.info}</h2>
                            <div className="line"></div>
                            <p>{cv.age}</p>
                            <p>{cv.birth}</p>
                            <p>{cv.mobile}</p>
                            <p> <a href={`mailto:${cv.mail}`}>{cv.mailbox} <i className="fa fa-link"></i></a></p>

                        </div>
                        <div className="skills">
                            {cv.skills.map(({ name = '', skill = [] }, index) => <Skill key={index} data={{ name, skill }} />)}

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
                            <h2>開發工具</h2>
                            <div className="line"></div>
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
                            <h2>學習研究中</h2>
                            <div className="line"></div>
                            <p>Javascript</p>
                            <p>Vue.js</p>
                            <p>Git</p>
                            <p>Github</p>
                            <p>WordPress</p>

                            <h2>興趣</h2>
                            <div className="line"></div>
                            <p>小提琴</p>
                            <p>吉他</p>
                            <p>游泳</p>
                        </div>
                    </div>
                    <div className="content">
                        <h2>{cv.aboutMe[0]}</h2>
                        <div className="line"></div>
                        <p>{cv.aboutMe[1]}</p>

                        <h2>{cv.experiences.title}</h2>
                        <div className="line"></div>

                        {cv.experiences.items.map((item, index) => <Experience key={index} data={item} />)}

                        <h2>工作經歷</h2>
                        <div className="line"></div>
                        <ul className="timeline">
                            <div className="event" data-date="3.8年 now-2016">
                                <h3>台灣析數-視覺化介面設計師</h3>
                            </div>
                            <h4>Web -- 網頁</h4>
                            <li><a target="_blank" href="http://www.asia-analytics.com.tw/tw/index.jsp">台灣析數官網-企業形象網站規劃設計 <i className="fa fa-link"></i></a></li>
                            <li><a target="_blank" href="http://psdatatech.com/cn/index.asp">普策數官網-國際大陸企業形象網站規劃設計 <i className="fa fa-link"></i></a></li>
                            <li><a target="_blank" href="https://www.facebook.com/asiaanalytics/posts/2568132533268761">衛生福利品質指標推廣徵文競賽 <i className="fa fa-link"></i></a></li>
                            <li><a target="_blank" href="https://search.ncfta.gov.tw/search/index">傳藝資源網-政府機關無障礙網頁設計[限館內瀏覽] <i className="fa fa-link"></i></a></li>
                            <h4>Exhibition -- 展場行銷佈置規劃設計</h4>
                            <li><a target="_blank" href="https://www.facebook.com/asiaanalytics/posts/2568132533268761">衛生福利部品質指標推廣徵文競賽成果發表暨頒獎典禮 <i className="fa fa-link"></i></a></li>
                            <li><a target="_blank" href="https://www.facebook.com/asiaanalytics/posts/2519154764833205">泰國DIGITAL THAILAND BIG BANG展覽 <i className="fa fa-link"></i></a></li>
                            <li><a target="_blank" href="https://www.facebook.com/asiaanalytics/posts/2489240054491343">國際大廠 AIoT Taiwan 展智慧應用方案展覽 <i className="fa fa-link"></i></a></li>
                            <li><a target="_blank" href="https://www.facebook.com/asiaanalytics/posts/2396643133751036">2019智慧製造與監控辨識展覽會 <i className="fa fa-link"></i></a></li>
                            <h4>Design -- 型錄</h4>
                            <li><a target="_blank" href="https://github.com/Wendy145/wendy/blob/master/design/seafood.pdf">幸鮮水產年菜套組型錄 <i className="fa fa-link"></i></a></li>
                            <li><a target="_blank" href="https://github.com/Wendy145/wendy/blob/master/design/AAT_tw.pdf">台灣析數公司型錄 <i className="fa fa-link"></i></a></li>
                            <li><a target="_blank" href="https://github.com/Wendy145/wendy/blob/master/design/iPASP_tw.pdf">iPASP產品型錄 <i className="fa fa-link"></i></a></li>
                            <li><a target="_blank" href="https://github.com/Wendy145/wendy/blob/master/design/iCAP_tw.pdf">iCAP產品型錄 <i className="fa fa-link"></i></a></li>
                            <li><a target="_blank" href="https://github.com/Wendy145/wendy/blob/master/design/KNIME_Server_tw.pdf">KNIME Sever產品型錄 <i className="fa fa-link"></i></a></li>
                            <li><a target="_blank" href="https://github.com/Wendy145/wendy/blob/master/design/PS_IMAGO_tw.pdf">PS IMAGO產品型錄 <i className="fa fa-link"></i></a></li>
                            <div className="event" data-date="2.5年 2013-2016">
                                <h3>乾杯集團一風堂-餐飲服務內/外場工讀生</h3>
                            </div>
                            <div className="event" data-date="3年 2012-2014">
                                <h3>順豐速運-財務部工讀生</h3>
                            </div>
                        </ul>
                        <h2>學歷</h2>
                        <div className="line"></div>
                        <ul className="timeline">
                            <div className="event" data-date="2016-2012">
                                <h3>德明財經科技大學 - 多媒體設計</h3>
                                <li><a target="_blank" href="https://contest.cpmah.org.tw/award/2015/web/C2015b041/index.html">2015全國慈善/科技/人文網頁設計比賽 慈善組 第一名 <i className="fa fa-link"></i></a></li>
                            </div>
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
