import React from 'react';

export default function Works({ data }) {
    if (!data) return null;
    const { name = '', date = '', items = [] } = data;

    return (
        <ul className="timeline">
            <div className="event" data-date={date}>
                <h3>{name}</h3>
            </div>
            {items.map(({ name: itemName = "", events = [] }, idx) => (
                <div key={idx} style={{ marginTop: '10px' }}>
                    {itemName && <h4>{itemName}</h4>}
                    {events.map(({ text = "", link }, evIdx) => (
                        link ? (
                            <li key={evIdx}>
                                <a target="_blank" rel="noopener noreferrer" href={link}>
                                    {text} <i className="fa fa-external-link"></i>
                                </a>
                            </li>
                        ) : (
                            <li key={evIdx}>{text}</li>
                        )
                    ))}
                </div>
            ))}
        </ul>
    );
}