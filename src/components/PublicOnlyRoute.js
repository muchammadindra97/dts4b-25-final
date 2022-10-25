import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

function PublicOnlyRoute() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    !isLogin ? <Outlet /> : <Navigate to="/" />
  );
}

export default PublicOnlyRoute;