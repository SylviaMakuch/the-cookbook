import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

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