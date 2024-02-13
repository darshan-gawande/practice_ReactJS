
const HeaderComponent = () => {
    return (
        <div className="header" >
     
        <div className="logo">
            <img src="./pictures/logo.jpg" alt="Netflix logo" />
            
        </div>

        <div className="searchbar">
            <input type="text" placeholder="Search..."/>
            <button id="buttom">Search</button>
        </div>

        <div className="user-icon">
            User ico
        </div>

        </div>
    )
}

export default HeaderComponent;
