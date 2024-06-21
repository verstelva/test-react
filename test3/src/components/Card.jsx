import React from 'react';
import { Card as AntdCard } from 'antd';

const Card = ({ event }) => {
  return (
    <AntdCard title={event.title}>
      <p>Начало в: {event.startDate}</p>
      <p>Конец в: {event.endDate}</p>
      <p>Напоминание за: {event.remindBeforeMinutes} минут</p>
    </AntdCard>
  );
};

export default Card;