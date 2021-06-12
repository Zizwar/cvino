export default function Works({ data: { name = '', date = '', items = [], icon = "fa fa-tv" } }) {
 //   console.log({ name, date, items })
    return (
        <ul className="timeline">
            <div className="event" data-date={date}>
                <h3>{name}</h3>
            </div>
            {items.map(({ name = "", events = [] }, index) =>
                <>
                    {name && <h4 key={index}>{name}</h4>}
                    {events.map(({ text = "", link }, index) =>
                        link ?
                            <li key={index + 123}><a target="_blank" href={link}>{text}<i className="fa fa-link"></i></a></li>
                            :
                            <li key={index + 123}>{text}</li>

                    )}
                </>
            )}
        </ul>
    )
}