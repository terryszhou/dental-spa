import '../css/App.css'
import { Home } from './Home'
import { Contact } from './Contact'
import { Services } from './Services'
import { Header } from './Header'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

export const App = () => {
    const dentalServices = [
        "Deep Cleaning",
        "Filling",
        "Gum Massage",
        "Root Canal",
        "Oral Mud Bath"
    ]

    return (
        <Router>
            <Header />
            <main>
                <Route 
                    exact path="/" 
                    component={Home}
                />
                <Route 
                    path="/services" 
                    render={() => <Services dentalServices={dentalServices}/>}
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