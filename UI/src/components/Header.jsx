import {Link, NavLink} from "react-router-dom"

function Header() {
    return (
        <>
            <header className="">
                <Link className="" to="/">
                    <p className="">Auctionopolis</p>
                </Link>
                <nav className="">
                    <NavLink to="/about">
                        About
                    </NavLink>

                    <NavLink to="/SignUp">
                        SignUp
                    </NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header