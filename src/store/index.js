import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getAllTemplate = createAsyncThunk('app/getAllTemplate', async () => {
  const response = await axios.get('/template/list');
  return response.data.data;
});

const appSlice = createSlice({
  name: 'app',
  initialState: {
    templates: [],
    selectedTemplate: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTemplate.fulfilled, (state, action) => {
      state.templates = action.payload;
    });
  },
});

export default appSlice.reducer;
