import { Switch, Route } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import { Login } from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={DashBoard} />
    </Switch>
  );
};

export default Routes;
