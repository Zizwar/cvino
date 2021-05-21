export default function Experience({ data: { name = '', experience = [], icon = "fa fa-tv" } }) {
    return (<>
        <h3><i className={icon}></i> {name}</h3>

        {experience.map((item, index) => <li key={index}>{item}</li>)}

    </>
    )
}