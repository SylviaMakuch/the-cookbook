import { createSlice } from "@reduxjs/toolkit";

export const PostId = createSlice({
  name: "IdChanger",
  initialState:{
    idMeal : {}
  },
  reducers: {
    IdChanger: (state, action) => {
        state.idMeal = action.payload;
    },
  },
});

export const { IdChanger} = PostId.actions

export default PostId.reducer