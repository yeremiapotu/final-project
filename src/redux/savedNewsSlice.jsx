import { createSlice } from "@reduxjs/toolkit";

const savedNewsSlice = createSlice({
  name: "savedNews",
  initialState: [],
  reducers: {
    addNews: (state, action) => {
      state.push(action.payload);
    },
    removeNews: (state, action) => {
      return state.filter((news) => news.url !== action.payload);
    },
  },
});

export const { addNews, removeNews } = savedNewsSlice.actions;
export default savedNewsSlice.reducer;
