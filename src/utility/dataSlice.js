import {createSlice} from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: [],
    },
    reducers: {
        addData: () => {
            console.log("Adding data");
        },
    },
});
export const {addData} = dataSlice.actions;
export default dataSlice.reducer;