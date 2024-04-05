import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
    reducer : {
        [cryptoApi.reducerPath] : cryptoApi.reducer
    },
    middleware: (i) => i().concat(cryptoApi.middleware)
});


