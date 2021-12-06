import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import ACtivityDashboard from "./components/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import NavBar from "./app/layout/NavBar";
import { Route, Switch, useLocation } from "react-router";
import HomePage from "./components/home/HomePage";
import ActivityForm from "./components/activities/form/ActivityForm";
import ActivityDetails from "./components/activities/details/ActivityDetails";
import TestErrors from "./components/errors/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/errors/NotFound";
import ServerError from "./components/errors/ServerError";

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      <Route path="/" exact component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="containerBody">
              <Switch>
                <Route path="/activities" exact component={ACtivityDashboard} />
                <Route path="/activities/:id" component={ActivityDetails} />
                <Route
                  key={location.key}
                  path={["/createActivity", "/manage/:id"]}
                  component={ActivityForm}
                />
                <Route path="/errors" component={TestErrors} />
                <Route path="/server-error" component={ServerError} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
