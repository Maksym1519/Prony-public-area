import React from "react";
import { ReactDOM } from "react-dom";
import { lazy, Suspense } from "react";
import loadable from '@loadable/component';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
const MainLazy = React.lazy(() => import('./pages/Main/Main'));
const BoardMainLazy = React.lazy(() => import('./pages/Board-main/BoardMain'));
const PostLazy = React.lazy(() => import('./pages/Post/Post'));
const ChangeLogLazy = React.lazy(() => import('./pages/ChangeLog/CnangeLog'));
const ChangePasswordLazy = React.lazy(() => import('./pages/ChangePassword/ChangePassword'));
const ProfileLazy = React.lazy(() => import('./pages/Profile/Profile'));


import "./fonts.scss";
import "./style.scss";

const App = () => {
  
  return (
     <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Board-main">BoardMain</Link>
        <Link to="/Post">Post</Link>
        <Link to="/ChangeLog">ChangeLog</Link>
        <Link to="/ChangePassword">ChangePassword</Link>
        <Link to="/Profile">Profile</Link>
         </nav>
      <Routes>
        <Route path="/" element={<React.Suspense><MainLazy /></React.Suspense>} />
        <Route path="/Board-main" element={<React.Suspense><BoardMainLazy /></React.Suspense>} />
        <Route path="/Post" element={<React.Suspense><PostLazy /></React.Suspense>} />
        <Route path="/ChangeLog" element={<React.Suspense><ChangeLogLazy /></React.Suspense>} />
        <Route path="/ChangePassword" element={<React.Suspense><ChangePasswordLazy /></React.Suspense>} />
        <Route path="/Profile" element={<React.Suspense><ProfileLazy /></React.Suspense>} />
       </Routes>
    </>
  );
};
export default App;
