export default function Experience({ data }) {
    if (!data) return null;
    const { name = '', icon = "fa fa-tv" } = data;
    const experienceList = data.experience || data.experienc || [];

    return (
        <div style={{ marginBottom: "20px" }}>
            <h3><i className={icon}></i> {name}</h3>
            <ul>
                {experienceList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}