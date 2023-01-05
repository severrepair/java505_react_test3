import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";
import App6 from "./App6";
import Appcal from "./Appcal";
import Events from "./folder2/Events";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  strict mode:자바스크립트의 문법을 엄격하게 확인한다는 의미
  //  React.StrictMode:배포 버전에는 제외되고 개발 버전에서도 동작하는 엄격모드, 몇가지 함수를 중복 실행하여 잘못된 것이 없는지 개발자에게 확인하도록 함
  //   <App5 />
  <React.StrictMode>
    {/*<App />*/}
    {/*<App2 />*/}
    {/*<App3 />*/}
    {/*<App4 />*/}
    {/*<App5 />*/}
    {/*<Appcal />*/}
      <App6 />

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
