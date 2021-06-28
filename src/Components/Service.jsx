export const Service = (props) => {
    if (!props.name) return <h1>{`404 ${props.match.params.id} not found.`} </h1>
    return (
        <div>
            <h3>{props.name}</h3>
            <p>${props.price.toFixed(2)}</p>
            <p className="serviceDesc">{props.description}</p>
        </div>
    )
}