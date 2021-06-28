import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <nav>
            <ul>
                <NavLink 
                    to="/" 
                    className="linkStyle" 
                    activeClassName="clickedLink" 
                    exact>
                        <li>Go to Home Page</li>
                </NavLink>
                <NavLink 
                    to="/services" 
                    className="linkStyle" 
                    activeClassName="clickedLink" 
                    exact>
                        <li>See Our Services</li>
                </NavLink>
                <NavLink 
                    to="/contact" 
                    className="linkStyle" 
                    activeClassName="clickedLink" 
                    exact>
                        <li>Contact Us!</li>
                </NavLink>
            </ul>
        </nav>
    )
}