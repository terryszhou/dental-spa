import { Link } from 'react-router-dom'

export const Services = (props) => {
    let renderedServices = props.dentalServices.map((e, id) => {
        return (
            <div>
                <Link 
                    to={`/services/${e.id}`}
                    className="serviceStyle">
                        <h3 key={id}>{e.name}</h3>
                </Link>
            </div>
        )
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