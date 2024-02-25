import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./React_Router";
import Error from "./Component/Error";
import Profile from "./React_Router/profile";
import Account from "./React_Router/account";


import {Outlet, RouterProvider, createBrowserRouter, } from "react-router-dom";
import User from "./React_Router/User";

const AppLayout = () => {
    return (
        <>
        < Header />
        < Outlet />
        </>
    )};

    const appRoute = createBrowserRouter([
        {
            path:"/",
            element:< AppLayout />,
            children:[
                {
                    path:"/user",
                    element:< User />,
                    children: [
                        {
                            path:"/user/profile",
                            element: < Profile />
                        },
                        {
                            path:"/user/account",
                            element: < Account />
                        },
                    ]
                }
            ],
            errorElement: < Error />
        }
    ]
    )


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={ appRoute } />);


