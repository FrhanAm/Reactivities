import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import ACtivityDashboard from "./components/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import NavBar from "./app/layout/NavBar";
import { Route, useLocation } from "react-router";
import HomePage from "./components/home/HomePage";
import ActivityForm from "./components/activities/form/ActivityForm";
import ActivityDetails from "./components/activities/details/ActivityDetails";

function App() {
  const location = useLocation();

  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="containerBody">
              <Route path="/activities" exact component={ACtivityDashboard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route
                key={location.key}
                path={["/createActivity", "/manage/:id"]}
                component={ActivityForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
