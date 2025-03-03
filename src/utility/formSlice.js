import { createSlice, nanoid } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    formInputData: {
      users: [],
    },
  },
  reducers: {
    setFormInputData: (state, action) => {
      // console.log(state.formInputData.users)
      const u = action.payload;
      const userDetail = {
        id: nanoid(),
        details: {
          name: u.name,
          email: u.email,
          address: u.address,
          contact: u.contact,
          birthday: u.birthday,
          password: u.password,
        },
      };
      // console.log(userDetail)
      state.formInputData.users.push(userDetail);
    },
    removeFormInputData: (state, action) => {
      // console.log(action.payload);
      state.formInputData.users = state.formInputData.users.filter(
        (row) => row.id !== action.payload,
      );
    },
  },
});
export const { setFormInputData, removeFormInputData } = formSlice.actions;
export default formSlice.reducer;
