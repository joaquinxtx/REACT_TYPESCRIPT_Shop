import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { store } from './store/store';
import { Provider } from 'react-redux';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={null}>
      <BrowserRouter>
          <App />
              
      </BrowserRouter>
    </Suspense>

    </Provider>

     
  </React.StrictMode>
)
