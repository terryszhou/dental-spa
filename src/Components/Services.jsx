export const Services = (props) => {
    let renderedServices = props.dentalServices.map((e, id) => {
        return <p key={id}>{e}</p>
    })
    return (
        <div>
            <h1>Services Provided</h1>
            <div className="serviceList">
                {renderedServices}
            </div>
        </div>
    )
}