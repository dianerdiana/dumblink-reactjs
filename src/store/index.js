import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getAllTemplate = createAsyncThunk(
  'appTemplate/getAllTemplate',
  async () => {
    const response = await axios.get('/template/list');
    return response.data;
  }
);

export const login = createAsyncThunk;
