import { React, useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  const pageSize = 10;
  const [progress, setProgress] = useState(0);
  const categories = ["general", "business", "entertainment", "health", "science", "sports", "technology"];

  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar NavbarTitle="NewsTechs" categories={categories} />
        <AllRoutes setProgress={setProgress} pageSize={pageSize} categories={categories} />
      </Router>
    </div>
  );
}
