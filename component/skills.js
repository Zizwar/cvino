export default function Skill({ data = {} }) {
    const { name = '', skill = [] } = data;
    return (
        <div style={{ marginTop: '20px' }}>
            <h2>{name}</h2>
            <div className="line"></div>
            {skill.map(({ name: skillName, percent }, index) => {
                const maxDivs = Math.min(10, Math.max(0, parseInt(percent / 10, 10)));
                const minDivs = 10 - maxDivs;

                return (
                    <div key={`dv-${index}`}>
                        <p>{skillName} [{percent}%]</p>
                        {[...Array(maxDivs).keys()].map((i) => (
                            <span key={`ck-${i}`} className="box-ck"></span>
                        ))}
                        {[...Array(minDivs).keys()].map((i) => (
                            <span key={`bx-${i}`} className="box"></span>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}