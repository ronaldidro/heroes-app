import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
// import { ConditionRoute } from "./ConditionRoute";

export const AppRouter = () => {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch> 
          <PublicRoute exact path="/login" component={ LoginScreen } isAuthenticated={ user.logged } />
          <PrivateRoute path="/" component={ DashboardRoutes } isAuthenticated={ user.logged } />
        </Switch>
      </div>
    </Router>
    // <Router>
    //   <div>
    //     <Switch>
    //       <ConditionRoute component={ LoginScreen } condition={!user.logged} path="/login" redirectFalse="/" />              
    //       <ConditionRoute component={ DashboardRoutes } condition={user.logged} path="/" redirectFalse="/login"/>
    //     </Switch>
    //   </div>
    // </Router>
  )
}
