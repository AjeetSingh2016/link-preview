import React from "react";
import Search from "./components/Search";
import Data from "./components/Data";
import { useState } from "react";
import Practise from "./components/Practise";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState(true)

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Search theme={theme} setTheme={setTheme} setSearch={setSearch} search={search} />}
          />
          <Route path="/data" theme={theme} setTheme={setTheme} element={<Data searches={search} setSearch={setSearch} />} />
          <Route path="/practise" element={<Practise/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
