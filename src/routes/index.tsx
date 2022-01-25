import { Switch } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import { Login } from "../pages/Login";
import Register from "../pages/Register";
import Route from "./route";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} isPrivate={false} />
      <Route path="/register" component={Register} isPrivate={false} />
      <Route path="/dashboard" component={DashBoard} isPrivate={true} />
    </Switch>
  );
};

export default Routes;
