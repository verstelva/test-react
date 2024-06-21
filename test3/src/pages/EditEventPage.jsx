import React, { useEffect } from 'react';
import { Form, Input, Button, DatePicker, TimePicker, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editEvent } from '../slices/eventSlice';
import moment from 'moment';

const EditEventPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();
  const event = useSelector(state => state.events.find(event => event.id === Number(id)));
  const [form] = Form.useForm();

  useEffect(() => {
    if (event) {
      form.setFieldsValue({
        title: event.title,
        startDate: moment(event.startDate),
        endDate: moment(event.endDate),
      });
    }
  }, [event, form]);

  const onFinish = (values) => {
    const updatedEvent = {
      id: event.id,
      title: values.title,
      startDate: values.startDate.format('YYYY-MM-DD HH:mm:ss'),
      endDate: values.endDate.format('YYYY-MM-DD HH:mm:ss'),
    };

    dispatch(editEvent({ id: event.id, updatedEvent }));
    notification.success({ message: 'Событие успешно обновлено' });
    history.push('/');
  };

  if (!event) return <div>Загрузка...</div>;

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item name="title" label="Название" rules={[{ required: true, message: 'Пожалуйста, введите название!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="startDate" label="Дата начала" rules={[{ required: true, message: 'Пожалуйста, выберите дату начала!' }]}>
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
      <Form.Item name="endDate" label="Дата окончания" rules={[{ required: true, message: 'Пожалуйста, выберите дату окончания!' }]}>
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Сохранить изменения</Button>
      </Form.Item>
    </Form>
  );
};

export default EditEventPage;