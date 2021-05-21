
export default function Skill({ data: { name = '', skill = [] } }) {
    return (
        <><h2>{name}</h2>
            <div className="line"></div>
            {skill.map(({ name, percent }, index) => {
                const maxDivs = parseInt(percent / 10);
                const minDivs = 10 - maxDivs;

                return (<>
                    <p>{name} ［{percent}%］</p>
                    {[...Array(maxDivs).keys()].map((_, index) =>
                        <span key={index} className="box-ck"></span>)}
                    {[...Array(minDivs).keys()].map((_, index) =>
                        <span key={index} className="box"></span>)}
                </>);
            })}

        </>);
}