import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  :root {
    --main-bg-color: #FFFFFF;
    --secondary-bg-color: #e6e6e6;
    --tertiary-bg-color: #ff00aa;
    --quaternary-bg-color: #210031;
    --quinary-bg-color: #14001f;

    --main-hover-color: #f5f5f5;

    --primary-text-color: #390054;
    --secondary-text-color: #48006A;
    --tertiary-text-color: #A7A7A7;
    --quaternary-text-color: #626262;

    --main-subtitle-color: #e4d9e9;

    --scrollbar-bg-color: #ebebeb;
    --scrollbar-bar-color: #260038;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
