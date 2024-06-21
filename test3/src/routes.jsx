import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import AddEventPage from './pages/AddEventPage';
import EditEventPage from './pages/EditEventPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<CalendarPage />} />
    <Route path="/add-event" element={<AddEventPage />} />
    <Route path="/edit-event/:id" element={<EditEventPage />} />
  </Routes>
);

export default AppRoutes;