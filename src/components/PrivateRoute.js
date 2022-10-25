import React from 'react';
import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import LockedDisplay from "./LockedDisplay";

function PrivateRoute() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    isLogin ? <Outlet /> : <LockedDisplay/>
  );
}

export default PrivateRoute;