import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
  const response = await fetch('http://localhost:7070/api/services');
  const data = await response.json();
  return data;
});

export const fetchServiceDetails = createAsyncThunk('services/fetchServiceDetails', async (id) => {
  const response = await fetch(`http://localhost:7070/api/services/${id}`);
  const data = await response.json();
  return data;
});

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    details: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.services = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchServiceDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchServiceDetails.fulfilled, (state, action) => {
        state.details = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchServiceDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default servicesSlice.reducer;