
export default function Line({ title = "" }) {
    return (
        <>
            {title && <h2>{title}</h2>}
            <div className="line"></div>
        </>
    )
}