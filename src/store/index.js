import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getAllTemplate = createAsyncThunk(
  'app/getAllTemplate',
  async () => {
    const response = await axios.get('/template/list');
    return response.data;
  }
);

const appSlice = createSlice({
  name: 'app',
  initialState: {
    data: [],
    selectedTemplate: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTemplate.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
  },
});

export default appSlice.reducer;
