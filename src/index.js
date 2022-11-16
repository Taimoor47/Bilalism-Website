import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<div
                    class="card mt-5 bg-info m-5 "
                    style={{
                      width: "334px",
                      height: "334px",
                      borderRadius: "12px",
                      overflow: "hidden"
                      
                    }}
                  >
                    <div class="card-body border-rounded">
                      <h5 class="card-title ">Card title</h5>
                      <h6 class="card-subtitle  text-muted">Card subtitle1</h6>
                      <p class="card-text p-2">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
