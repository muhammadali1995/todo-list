import { NavLink } from "react-router-dom"

export const TodoNavLink = ({ navLink }) => {

    const className = ({ isActive }) => isActive ? 'border-b-2 border-b-blue-600' : ''
    
    return <NavLink
        className={className}
        to={navLink.route}>
        {navLink.title}
    </NavLink>
}