import React, { useState } from 'react';
import { Calendar, Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, editEvent } from '../slices/eventSlice';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';
import moment from 'moment';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  const handleDateSelect = (value) => {
    setSelectedDate(value);
    setModalVisible(true);
  };

  const handleCreate = (values) => {
    if (editingEvent) {
      dispatch(editEvent({ id: editingEvent.id, updatedEvent: { ...editingEvent, ...values } }));
      setEditingEvent(null);
    } else {
      dispatch(addEvent({ ...values, id: Date.now() }));
    }
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setEditingEvent(null);
  };

  const eventsOnSelectedDate = events.filter(
    (event) => moment(event.startDate).isSame(selectedDate, 'day')
  );

  return (
    <div>
      <Calendar onSelect={handleDateSelect} />
      <EventForm visible={modalVisible} onCreate={handleCreate} onCancel={handleCancel} event={editingEvent} />
      {selectedDate && <EventList events={eventsOnSelectedDate} />}
    </div>
  );
};

export default CalendarPage;