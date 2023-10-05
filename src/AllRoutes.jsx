import React from 'react'
import { Routes, Route} from "react-router-dom";
import News from "./Components/News";

export default function AllRoutes({setProgress,pageSize}) {
  return (
    <Routes>
      <Route exact path="/" element={<News setProgress={setProgress} key="home" pageSize={pageSize} category="general" country="in" />}/>
      <Route exact path="/science" element={<News setProgress={setProgress} key="si"   pageSize={pageSize} category="science" country="in" />}/>
      <Route exact path="/technology" element={<News setProgress={setProgress} key="tech" pageSize={pageSize} category="technology" country="in" />}/>
      <Route exact path="/sports" element={<News setProgress={setProgress} key="spo"  pageSize={pageSize} category="sports" country="in" />}/>
      <Route exact path="/health" element={<News setProgress={setProgress} key="he"   pageSize={pageSize} category="health" country="in" />}/>
      <Route exact path="/business" element={<News setProgress={setProgress} key="bu"   pageSize={pageSize} category="business" country="in" />}/>
      <Route exact path="/entertainment" element={<News setProgress={setProgress} key="en"   pageSize={pageSize} category="entertainment" country="in" />}/>
    </Routes>
  )
}
