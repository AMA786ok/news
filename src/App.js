// import "App.css";
import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const pageSize = 12;
  const apiKey = "2801638bebde4d7b94715df54b1a2ad4";
  const [progress, setProgress] = useState(0);

  
  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="us"
                apiKey={apiKey}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="us"
                apiKey={apiKey}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="us"
                apiKey={apiKey}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="us"
                apiKey={apiKey}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="us"
                apiKey={apiKey}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="us"
                apiKey={apiKey}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="us"
                apiKey={apiKey}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="us"
                apiKey={apiKey}
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
