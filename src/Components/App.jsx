import '../css/App.css'
import { useState } from 'react'

import { Home } from './Home'
import { Contact } from './Contact'
import { Services } from './Services'
import { Header } from './Header'
import { serviceDetails } from '../data/serviceDetails'
import { Service } from './Service'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

export const App = () => {
    const [dentalServices] = useState(serviceDetails)

    return (
        <Router>
            <Header />
            <main>
                <Route 
                    exact path="/" 
                    component={Home}
                />
                <Route 
                    exact path="/services" 
                    render={() => <Services dentalServices={dentalServices}/>}
                />
                <Route 
                    path="/services/:id"
                    render={props => {
                        console.log(...props.match.params.id)
                        const service = dentalServices.find(e => e.id.toString() === props.match.params.id)
                        props = {...props, ...service}
                        return <Service {...props} />
                    }}
                />
                <Route 
                    path="/contact" 
                    component={Contact}
                />
                <Route 
                    path="/resource/:id/otherResource/:otherId"
                    render={props => {
                        console.log(props.match.params)
                        return
                    }}
                />
                <Route 
                    path="/add/:x/:y"
                    render={props => {
                        const x = parseInt(props.match.params.x)
                        const y = parseInt(props.match.params.y)
                        return <h1>{x} + {y} = {x + y}</h1>
                    }}
                />
            </main>
        </Router>
    )
}