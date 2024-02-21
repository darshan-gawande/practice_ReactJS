import React from "react";
import ReactDOM  from "react-dom/client";
import Body from "./Hooks/useState";
import HeaderComponent from "./Component/Header";



const AppLayout = () => {
    return (
        < HeaderComponent />
    )};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< AppLayout  />);


