import React from 'react';
import ReactDOM from 'react-dom/client';
// ============================================================
// import { App } from 'components/App';
// import './index.css';
// ============================================================
import Profile from './components/first-task/UserSocialCard.js'
import  userData  from './data/user.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Profile
      {...userData}
    />
  </React.StrictMode>
);