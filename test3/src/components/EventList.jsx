import React from 'react';
import { List, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../slices/eventSlice';

const EventList = ({ events }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={events}
      renderItem={(event) => (
        <List.Item
          actions={[
            <Link to={`/edit-event/${event.id}`}>Редактировать</Link>,
            <Button type="link" onClick={() => handleDelete(event.id)}>
              Удалить
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={event.title}
            description={`${event.startDate} до ${event.endDate}`}
          />
        </List.Item>
      )}
    />
  );
};

export default EventList;