import { Link } from "react-router-dom";

const User = () => {
    return (
        <>
         <h1> Darshan Gawande </h1>

        <div className="user-router">
            <ul>
                <li>
                   <Link to={"/user/profile"}>Profile</Link> 
                </li>
                <li>
                    <Link to={"/user/account"}>Account</Link>
                </li>
            </ul>
        </div>
        </>
    )
};

export default User;
