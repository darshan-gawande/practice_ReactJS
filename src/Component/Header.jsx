import { useState, useEffect } from "react";

const HeaderComponent = () => {
    const [changeColor, setChangeColor] = useState([]);

    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async ()=> {
        const data = await fetch("https://data.amazon.in/api/marketplaces/A21TJRUUN4KGV/deals/2855b762,cb2ab414,3664e372,6db7b85c,c08bf534,5057206f,2d5e9f29,4c4706fb,c13f37cf,d20ddb21,053d3e7e,d9bcd61f,6217024f,cfbc997a,c33737c5,cecfb25a,528d8505,a28bdb7a,7ba0b9dd,2544fa7e,5c3b1f32,26013cde,90726821,8f65c38e,1df7e771,43705b71,a014b948,96dce253,3b6462bf,2f0a2b31");
        const json = await data.json();

        console.log(json);

    }

   

    return (
        <div className="header" >
     
        <div className="logo">
            <img className= "img" src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="logo" />            
        </div>

        <div className="searchbar">
            <input type="text" placeholder="Search..."/>
            <button className="search-btn"  onClick={() => {
                setChangeColor();
            }}>Search</button>
        </div>

        <div className="user-icon">
            User icon
        </div>

        </div>
    )
}

export default HeaderComponent;
