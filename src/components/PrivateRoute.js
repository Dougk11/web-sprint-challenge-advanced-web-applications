import React from "react";
import { Route, Redirect } from "react-router-dom";

const  PrivateRoute = ({component:Component, ...rest}) => {
  return <Route {...rest} render={(props) => {
    console.log('is this working?')
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token')) {
      return <Component {...props} />
    } else {
      console.log('how about here?')
      return <Redirect to='/login'/>
    }
  }}
    />
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute