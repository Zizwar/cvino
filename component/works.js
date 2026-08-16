import React from 'react';

export default function Works({ data }) {
    if (!data) return null;
    const { name = '', date = '', items = [] } = data;

    return (
        <div style={{ marginBottom: '25px' }}>
            {items.map(({ name: itemName = "", events = [] }, idx) => (
                <div key={idx} className="project-card">
                    {itemName && (
                        <h4>
                            <i className="fa fa-code-fork" style={{ color: '#ffc107', fontSize: '0.9em' }}></i>
                            {itemName}
                        </h4>
                    )}
                    <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '8px 0 0 0' }}>
                        {events.map(({ text = "", link }, evIdx) => (
                            <li key={evIdx} style={{ margin: '6px 0', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <i className="fa fa-angle-right" style={{ color: '#ffc107', marginTop: '4px' }}></i>
                                <div>
                                    {link ? (
                                        <a 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            href={link}
                                            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                                        >
                                            {text} <i className="fa fa-external-link" style={{ fontSize: '11px' }}></i>
                                        </a>
                                    ) : (
                                        <span>{text}</span>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}