import { Redirect, Route as ReactDOMRoute, RouteProps } from "react-router-dom";
import { ComponentType } from "react";

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType<any>;
}

const Route = ({
  isPrivate = false,
  component: Component,
  ...routeProps
}: Props) => {
  const authToken = localStorage.getItem("@HToken");
  return (
    <ReactDOMRoute
      {...routeProps}
      render={() =>
        isPrivate === !!authToken ? (
          <Component></Component>
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};

export default Route;
