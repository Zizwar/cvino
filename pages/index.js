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

                           
                            <Line title={"Other"} />
                            <p>Git</p>
                            <p>Docker</p>
                        
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


                          
                        </ul>
                    </div>
                </div>

            </body>
        </>
    )
}
