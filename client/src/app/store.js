// We have created this to for RTK Query i.e Redux toolkit to reduce the unnceccessary api call in our app 
//and we have createed a seprate file for it which is store.js
//wacth redux video and react course for more info
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "@/features/api/authApi";

export const appStore = configureStore({
   reducer:rootReducer,
   middleware:(defaultMiddleware)=>defaultMiddleware().concat(authApi.middleware)
})

//learn all this api integration like RTK Query from react course or article and video