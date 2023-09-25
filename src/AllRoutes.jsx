import React from 'react'
import { Routes, Route} from "react-router-dom";
import News from "./Components/News";

export default function AllRoutes({setProgress}) {
  return (
    <Routes>
      <Route exact path="/" element={<News setProgress={setProgress} key="home" pageSize="10" category="general" country="in" />}/>
      <Route exact path="/science" element={<News setProgress={setProgress} key="si"   pageSize="10" category="science" country="in" />}/>
      <Route exact path="/technology" element={<News setProgress={setProgress} key="tech" pageSize="10" category="technology" country="in" />}/>
      <Route exact path="/sports" element={<News setProgress={setProgress} key="spo"  pageSize="10" category="sports" country="in" />}/>
      <Route exact path="/health" element={<News setProgress={setProgress} key="he"   pageSize="10" category="health" country="in" />}/>
      <Route exact path="/business" element={<News setProgress={setProgress} key="bu"   pageSize="10" category="business" country="in" />}/>
      <Route exact path="/entertainment" element={<News setProgress={setProgress} key="en"   pageSize="10" category="entertainment" country="in" />}/>
    </Routes>
  )
}
