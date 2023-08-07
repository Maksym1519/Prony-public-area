import React from "react";
import { ReactDOM } from "react-dom";
import { lazy, Suspense } from "react";
import loadable from '@loadable/component';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
const MainLazy = React.lazy(() => import('./pages/Main/Main'));
const BoardMainLazy = React.lazy(() => import('./pages/Board-main/BoardMain'));

import "./fonts.scss";
import "./style.scss";

const App = () => {
  
  return (
     <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Board-main">BoardMain</Link>
       </nav>
      <Routes>
        <Route path="/" element={<React.Suspense><MainLazy /></React.Suspense>} />
        <Route path="/Board-main" element={<React.Suspense><BoardMainLazy /></React.Suspense>} />
      </Routes>
    </>
  );
};
export default App;
