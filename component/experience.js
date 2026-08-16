export default function Experience({ data }) {
    if (!data) return null;
    const { name = '', icon = "fa fa-cogs" } = data;
    const experienceList = data.experience || data.experienc || [];

    return (
        <div style={{ marginBottom: "25px" }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.15em', color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className={icon} style={{ color: '#ffc107', fontSize: '0.95em' }}></i>
                {name}
            </h3>
            <ul style={{ margin: '5px 0 15px 0', paddingLeft: '22px' }}>
                {experienceList.map((item, index) => (
                    <li key={index} style={{ marginBottom: '6px', color: '#444' }}>{item}</li>
                ))}
            </ul>
        </div>
    );
}