import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className="header-router">
            <img className="logo-router" src="https://www.shutterstock.com/image-vector/bird-nest-logo-vector-icon-260nw-1770214976.jpg" alt="logo" />

            <nav className="nav-router">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>

                    <li>
                       <Link to={"/user"}>User</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
};

export default Header;









