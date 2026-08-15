import Head from 'next/head';
import Skills from '../component/skills';
import Works from '../component/works';
import Line from '../component/line';
import Experience from '../component/experience';
import cv from '../db/cv.json';

export default function Home() {
    return (
        <>
            <Head>
                <title>{cv.name} - Resume</title>
                <meta name="description" content={`Resume of ${cv.name} - ${cv.subName}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="wrapper">
                <header className="header">
                    <div className="photo" style={{ display: "none" }}></div>
                    <h1 className="quote">{cv.name}</h1>
                    <h3>- {cv.subName} -</h3>
                </header>

                <aside className="side">
                    <div className="photo"></div>
                    <div className="info">
                        <Line title={cv.info || "Basic information"} />
                        <p><i className="fa fa-user" style={{ marginRight: '8px', color: '#ffc107' }}></i>{cv.nameT || `Name: ${cv.name}`}</p>
                        {cv.mobile && (
                            <p>
                                <i className="fa fa-phone" style={{ marginRight: '8px', color: '#ffc107' }}></i>
                                <a href={`tel:${cv.mobile.replace(/[^+\d]/g, '')}`}>{cv.mobile}</a>
                            </p>
                        )}
                        {cv.mailbox && (
                            <p>
                                <i className="fa fa-envelope" style={{ marginRight: '8px', color: '#ffc107' }}></i>
                                <a href={`mailto:${cv.mail || 'zip.exe@gmail.com'}`}>{cv.mailbox}</a>
                            </p>
                        )}

                        {cv.links && cv.links.length > 0 && (
                            <div style={{ marginTop: '20px' }}>
                                <Line title="Social & Links" />
                                <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0' }}>
                                    {cv.links.map((link, idx) => (
                                        <li key={idx} style={{ margin: '8px 0' }}>
                                            <a 
                                                href={link.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                            >
                                                {link.icon && <i className={link.icon} style={{ color: '#ffc107', width: '16px' }}></i>}
                                                <span style={{ textTransform: 'capitalize' }}>{link.title}</span>
                                                <i className="fa fa-external-link" style={{ fontSize: '11px', opacity: 0.7 }}></i>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="skills">
                        {cv.skills && cv.skills.map((skillGroup, index) => (
                            <Skills key={index} data={skillGroup} />
                        ))}
                    </div>
                </aside>

                <main className="content">
                    {cv.aboutMe && (
                        <section style={{ marginBottom: '30px' }}>
                            <Line title={cv.aboutMe[0] || "About Me"} />
                            <p style={{ whiteSpace: 'pre-line', lineHeight: '1.7' }}>{cv.aboutMe[1]}</p>
                        </section>
                    )}

                    {cv.experiences && (
                        <section style={{ marginBottom: '30px' }}>
                            <Line title={cv.experiences.title || "Experience"} />
                            {cv.experiences.items && cv.experiences.items.map((item, index) => (
                                <Experience key={index} data={item} />
                            ))}
                        </section>
                    )}

                    {cv.works && cv.works.length > 0 && (
                        <section style={{ marginBottom: '30px' }}>
                            <Line title="Key Projects & Work" />
                            {cv.works.map((item, index) => (
                                <Works key={index} data={item} />
                            ))}
                        </section>
                    )}
                </main>
            </div>
        </>
    );
}
