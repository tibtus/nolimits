/*!
 * =========================================================
 *          Nolimits  *
 * =========================================================
 * Copyright (c) 2023
 * @Author: Serhii Burdeinyi
 * @email: tibtus@gmail.com
 * Licensed under the MIT License (MIT)
 */

import React from "react";

import { BrowserRouter } from "react-router-dom";
/*import {createBrowserHistory} from "history";*/

import RouterApp from "./Router/Router.js"
/*import {Storage} from "./context/storage-context";*/

/*
const history = createBrowserHistory();
*/

function App(props) {

  /*const [storage, setStorage] = Storage.useReducer();*/

  return (
      /*<Storage.Context.Provider value={{storage, setStorage}}>*/

        <BrowserRouter>
            <RouterApp/>
        </BrowserRouter>

      /*</Storage.Context.Provider>*/
  );
}



export default App;