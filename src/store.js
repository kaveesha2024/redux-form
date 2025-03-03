import {configureStore} from "@reduxjs/toolkit";
import formReducer from "./utility/formSlice.js";

export default configureStore({
    reducer: {
        form: formReducer,
    },
});