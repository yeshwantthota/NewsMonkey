import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 10;

  const [progress, setprogress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News
              setprogress={setprogress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              setprogress={setprogress}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setprogress={setprogress}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News
              setprogress={setprogress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/health">
            <News
              setprogress={setprogress}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              setprogress={setprogress}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setprogress={setprogress}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setprogress={setprogress}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
