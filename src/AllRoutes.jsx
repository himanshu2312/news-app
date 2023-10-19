import React from 'react'
import { Routes, Route } from "react-router-dom";
import News from "./Components/News";

export default function AllRoutes({ setProgress, pageSize, categories }) {
  return (
    <Routes>
      {
        categories?.map((cat) => {
          const path = `/${cat !== "general" ? cat : ''}`
          return (
            <Route exact path={path} key={cat} element={<News setProgress={setProgress} pageSize={pageSize} category={cat} country="in" />} />
          )
        })}
    </Routes>
  )
}
