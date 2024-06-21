import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.push(action.payload);
    },
    editEvent: (state, action) => {
      const { id, updatedEvent } = action.payload;
      const index = state.findIndex((event) => event.id === id);
      if (index !== -1) {
        state[index] = updatedEvent;
      }
    },
    deleteEvent: (state, action) => {
      const id = action.payload;
      return state.filter((event) => event.id !== id);
    },
  },
});

export const { addEvent, editEvent, deleteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;