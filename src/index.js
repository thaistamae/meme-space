import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider} from "@lyket/react";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Provider apiKey="pt_3061ff8b0feb977bbbb6acc940279f">
      <App/>
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);


