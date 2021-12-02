import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { ConditionRoute } from "./ConditionRoute";
import { AuthContext } from "../auth/AuthContext";

export const AppRouter = () => {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <ConditionRoute component={ LoginScreen } condition={!user.logged} path="/login" redirectFalse="/" />              
          <ConditionRoute component={ DashboardRoutes } condition={user.logged} path="/" redirectFalse="/login"/>
        </Switch>
      </div>
    </Router>
  )
}
