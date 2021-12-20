import React from "react";
import LoginPage from "../pages/login";
import UserPage from "../pages/user";
import NotFoundPage from "../pages/notFound"

export default [
  {
    type:"redirect",
    exact:true,
    from:"/",
    to:"/user",
  },
  {
    type: "route",
    path:"/user",
    exact:true,
    component:UserPage
  },
  {
    type: "route",
    path: "/login",
    exact: true,
    component: LoginPage
  },
  {
    type: "route",
    path: "*",
    render:({staticContext})=>{
      if (staticContext){
        staticContext.NOT_FOUND= true;
      }
      return <NotFoundPage />
    }
  },
]