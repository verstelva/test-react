import React from 'react';
import { Form, Input, Button, DatePicker, TimePicker, notification } from 'antd';
import { useDispatch } from 'react-redux';
import { addEvent } from '../slices/eventSlice';
import moment from 'moment';

const AddEventPage = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const newEvent = {
      id: Date.now(),
      title: values.title,
      startDate: values.startDate.format('YYYY-MM-DD') + ' ' + values.startTime.format('HH:mm:ss'),
      endDate: values.endDate.format('YYYY-MM-DD') + ' ' + values.endTime.format('HH:mm:ss'),
      remindBeforeMinutes: values.remindBeforeMinutes,
    };

    dispatch(addEvent(newEvent));
    notification.success({ message: 'Событие успешно добавлено!' });
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item name="title" label="Название:" rules={[{ required: true, message: 'Пожалуйста, введите название!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="startDate" label="Дата начала:" rules={[{ required: true, message: 'Пожалуйста, выберите дату начала!' }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item name="startTime" label="Время начала:" rules={[{ required: true, message: 'Пожалуйста, выберите дату начала!' }]}>
        <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
      </Form.Item>
      <Form.Item name="endDate" label="Дата окончания:" rules={[{ required: true, message: 'Пожалуйста, выберите дату окончания!' }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item name="endTime" label="Время окончания:" rules={[{ required: true, message: 'Пожалуйста, выберите дату окончания!' }]}>
        <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
      </Form.Item>
      <Form.Item name="remindBeforeMinutes" label="Напомнить за (минут)" rules={[{ required: true, message: 'Укажите, за сколько минут нужно напомнить!' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Добавить событие</Button>
      </Form.Item>
    </Form>
  );
};

export default AddEventPage;