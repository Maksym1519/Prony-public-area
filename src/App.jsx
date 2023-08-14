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
const AvatarLazy = React.lazy(() => import('./pages/Avatar/Avatar'));
const LoginLazy = React.lazy(() => import('./pages/Login/Login'));
const RegistrationLazy = React.lazy(() => import('./pages/Login/Registration'));
const ResetLazy = React.lazy(() => import('./pages/Login/Reset'));
const NewPasswordLazy = React.lazy(() => import('./pages/Login/NewPassword'));
const NotFoundLazy = React.lazy(() => import('./pages/404/NotFound'));
const ErrorLazy = React.lazy(() => import('./pages/404/Error'));



import "./fonts.scss";
import "./style.scss";

const App = () => {
  
  return (
     <>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/Board-main">BoardMain</Link>
        <Link to="/Post">Post</Link>
        <Link to="/ChangeLog">ChangeLog</Link>
        <Link to="/ChangePassword">ChangePassword</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Avatar">Avatar</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Registration">Registration</Link>
        <Link to="/Reset">Reset</Link>
        <Link to="/NewPassword">NewPassword</Link>
        <Link to="/NotFound">404</Link>
        <Link to="/Error">500</Link>
        <Link to="/State">State</Link>
         </nav> */}
      <Routes>
        <Route path="/" element={<React.Suspense><MainLazy /></React.Suspense>} />
        <Route path="/Board-main" element={<React.Suspense><BoardMainLazy /></React.Suspense>} />
        <Route path="/Post" element={<React.Suspense><PostLazy /></React.Suspense>} />
        <Route path="/ChangeLog" element={<React.Suspense><ChangeLogLazy /></React.Suspense>} />
        <Route path="/ChangePassword" element={<React.Suspense><ChangePasswordLazy /></React.Suspense>} />
        <Route path="/Profile" element={<React.Suspense><ProfileLazy /></React.Suspense>} />
        <Route path="/Avatar" element={<React.Suspense><AvatarLazy /></React.Suspense>} />
        <Route path="/Login" element={<React.Suspense><LoginLazy /></React.Suspense>} />
        <Route path="/Registration" element={<React.Suspense><RegistrationLazy /></React.Suspense>} />
        <Route path="/Reset" element={<React.Suspense><ResetLazy /></React.Suspense>} />
        <Route path="/NewPassword" element={<React.Suspense><NewPasswordLazy /></React.Suspense>} />
        <Route path="/NotFound" element={<React.Suspense><NotFoundLazy /></React.Suspense>} />
        <Route path="/Error" element={<React.Suspense><ErrorLazy /></React.Suspense>} />
        </Routes>
    </>
  );
};
export default App;
