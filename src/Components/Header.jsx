import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink 
                        to="/" 
                        className="linkStyle" 
                        activeClassName="clickedLink" 
                        exact>
                            Go to Home Page
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/services" 
                        className="linkStyle" 
                        activeClassName="clickedLink" 
                        exact>
                            See Our Services
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contact" 
                        className="linkStyle" 
                        activeClassName="clickedLink" 
                        exact>
                            Contact Us!
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}