import { Link } from "@mui/material"

const NavItem = ({ title, link, size="0.675rem", color="#3f3f3f" })=> {
    return(
        <Link
            href= { link}
            fontSize={size}
            color={color}
        >
            { title } 
        </Link>
    )
}

export default NavItem