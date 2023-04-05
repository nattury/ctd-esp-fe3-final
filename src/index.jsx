import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Routes/Home'
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import {routes} from './Routes'
import { ContextProvider } from './Components/utils/global.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<App/>}>
              <Route path={routes.home} element={<Home />}/>
              <Route path={routes.dentist} element={<Detail/>}/>
              <Route path={routes.contact} element={<Contact/>}/>
              <Route path={routes.favs} element={<Favs/>}/>
            </Route>
            <Route path='*' element={<h1>Page not found</h1>}/>
          </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ContextProvider>
);


