import { createSlice } from "@reduxjs/toolkit";

const compeletedSlice = createSlice({
  name: "completed",
  initialState: [
    {
      userId: 1,
      id: 3,
      title: "Study",
      isDone: false,
      isImportant: false,
    },
    {
      userId: 1,
      id: 4,
      title: "Give water to the plants",
      isDone: false,
      isImportant: false,
    },
  ],
  reducers: {
    done: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { done } = compeletedSlice.actions;
export default compeletedSlice.reducer;
