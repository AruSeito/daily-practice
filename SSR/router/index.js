import React from "react";
import { createBrowserHistory } from "history";
import { Router, StaticRouter, Route, Redirect, Switch } from "react-router";
import routeConfig from "./routeConfig";

const routes = routeConfig.map((conf, index) => {
  const { type, ...otherConf } = conf;
  if (type === "redirect") {
    return <Redirect key={index} {...otherConf} />
  } else {
    return <Route key={index} {...otherConf} />
  }
})


export const createRoute = (type)=>(params)=>{
  if(type === "client"){
    const history = createBrowserHistory();
    return <Router history={history}>
      <Switch>
        {routes}
      </Switch>
    </Router>
  }else if(type === "server"){
    <StaticRouter {...params}>
      <Switch>
        {routes}
      </Switch>
    </StaticRouter>
  }
}
