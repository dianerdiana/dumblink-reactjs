import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getAllTemplate = createAsyncThunk('app/getAllTemplate', async () => {
  const response = await axios.get('/template/list');
  return response.data.data;
});

export const getTemplate = createAsyncThunk('app/getTemplate', async (id) => {
  const response = await axios.get(`/template/${id}/view`);
  return response.data.data;
});

export const getAllLinktree = createAsyncThunk('app/getAllLinktree', async () => {
  const response = await axios.get('/linktree/list');
  return response.data.data;
});

export const deleteLinktree = createAsyncThunk('app/deleteLinktree', async (id, { dispatch }) => {
  try {
    const response = await axios.get(`/linktree/${id}/delete`);
    await dispatch(getAllLinktree());
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const addLinktree = createAsyncThunk('app/addLinktree', async (data, { dispatch }) => {
  try {
    const response = await axios.post('/linktree/store', data, {
      config: {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      },
    });
    await dispatch(getAllLinktree());
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

const appSlice = createSlice({
  name: 'app',
  initialState: {
    templates: [],
    linktrees: [],
    selectedTemplate: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTemplate.fulfilled, (state, action) => {
        state.templates = action.payload;
      })
      .addCase(getTemplate.fulfilled, (state, action) => {
        state.selectedTemplate = action.payload;
      })
      .addCase(getAllLinktree.fulfilled, (state, action) => {
        state.linktrees = action.payload;
      });
  },
});

export default appSlice.reducer;
