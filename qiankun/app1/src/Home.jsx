import React from "react";
import {Link} from "react-router-dom";

const Home = ()=>{

  return <h1>home,<Link to="/about">go to About</Link></h1>
}

export default Home;