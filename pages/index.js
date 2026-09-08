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
                <title>{cv.name} - Senior JavaScript & Deno Architect | AI & Automation Systems</title>
                <meta name="description" content={`Resume & Portfolio of ${cv.name} - ${cv.subName}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="wrapper">
                <header className="header">
                    <h1>{cv.name}</h1>
                    <h3>{cv.subName}</h3>
                    <div className="header-actions">
                        <a 
                            href="/cv-ibrahim-bidi.pdf" 
                            download="Ibrahim_Bidi_CV.pdf"
                            className="header-download-btn header-pdf-btn"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className="fa fa-file-pdf-o"></i> Download CV (PDF)
                        </a>
                        <a 
                            href="/cv-ibrahim-bidi.docx" 
                            download="Ibrahim_Bidi_CV.docx"
                            className="header-download-btn header-docx-btn"
                        >
                            <i className="fa fa-file-word-o"></i> Download CV (DOCX)
                        </a>
                    </div>
                </header>

                <div className="main-body">
                    <aside className="side">
                        <div className="photo"></div>
                        <div className="info">
                            <Line title={cv.info || "Basic information"} />
                            <p>
                                <i className="fa fa-user" style={{ marginRight: '10px', color: '#ffc107', width: '16px' }}></i>
                                {cv.nameT || `Name: ${cv.name}`}
                            </p>
                            {cv.mobile && (
                                <p>
                                    <i className="fa fa-phone" style={{ marginRight: '10px', color: '#ffc107', width: '16px' }}></i>
                                    <a href={`tel:${cv.phoneRaw || ''}`}>{cv.mobile}</a>
                                </p>
                            )}
                            {cv.mailbox && (
                                <p>
                                    <i className="fa fa-envelope" style={{ marginRight: '10px', color: '#ffc107', width: '16px' }}></i>
                                    <a href={`mailto:${cv.mail || 'zip.exe@gmail.com'}`}>{cv.mailbox}</a>
                                </p>
                            )}

                            {cv.downloads && cv.downloads.length > 0 && (
                                <div style={{ marginTop: '25px' }}>
                                    <Line title="Download Resume" />
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
                                        {cv.downloads.map((item, idx) => (
                                            <a
                                                key={idx}
                                                href={item.url}
                                                download={item.filename}
                                                className={`cv-download-btn ${item.format.toLowerCase()}-btn`}
                                                target={item.format === 'PDF' ? '_blank' : undefined}
                                                rel={item.format === 'PDF' ? 'noopener noreferrer' : undefined}
                                            >
                                                <i className={item.icon || 'fa fa-download'} style={{ fontSize: '16px' }}></i>
                                                <span>{item.title}</span>
                                                <i className="fa fa-arrow-down" style={{ fontSize: '12px', marginLeft: 'auto', opacity: 0.8 }}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {cv.links && cv.links.length > 0 && (
                                <div style={{ marginTop: '25px' }}>
                                    <Line title="Social & Portfolios" />
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0' }}>
                                        {cv.links.map((link, idx) => (
                                            <li key={idx} style={{ margin: '10px 0' }}>
                                                <a 
                                                    href={link.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                                                >
                                                    {link.icon && <i className={link.icon} style={{ color: '#ffc107', width: '16px', textAlign: 'center' }}></i>}
                                                    <span style={{ textTransform: 'capitalize' }}>{link.title}</span>
                                                    <i className="fa fa-external-link" style={{ fontSize: '11px', opacity: 0.6 }}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="skills">
                            <div style={{ marginTop: '20px' }}>
                                <Line title="Core Technical Stack" />
                            </div>
                            {cv.skills && cv.skills.map((skillGroup, index) => (
                                <Skills key={index} data={skillGroup} />
                            ))}
                        </div>
                    </aside>

                    <main className="content">
                        {cv.aboutMe && (
                            <section style={{ marginBottom: '35px' }}>
                                <Line title={cv.aboutMe[0] || "About Me"} />
                                <p style={{ whiteSpace: 'pre-line', lineHeight: '1.75', fontSize: '1.02em', color: '#333' }}>
                                    {cv.aboutMe[1]}
                                </p>
                            </section>
                        )}

                        {cv.works && cv.works.length > 0 && (
                            <section style={{ marginBottom: '35px' }}>
                                <Line title="Featured Production Systems & Platforms" />
                                {cv.works.map((item, index) => (
                                    <Works key={index} data={item} />
                                ))}
                            </section>
                        )}

                        {cv.experiences && (
                            <section style={{ marginBottom: '35px' }}>
                                <Line title={cv.experiences.title || "Technical Architecture & Experience"} />
                                {cv.experiences.items && cv.experiences.items.map((item, index) => (
                                    <Experience key={index} data={item} />
                                ))}
                            </section>
                        )}
                    </main>
                </div>
            </div>
        </>
    );
}
