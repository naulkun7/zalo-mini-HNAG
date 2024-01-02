import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setInfoUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
export let { setInfoUser } = userSlice.actions;
