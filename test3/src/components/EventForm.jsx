import React from 'react';
import { Form, Input, DatePicker, TimePicker, Modal } from 'antd';
import moment from 'moment';

const EventForm = ({ visible, onCreate, onCancel, event }) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (event) {
      form.setFieldsValue({
        title: event.title,
        startDate: moment(event.startDate),
        endDate: moment(event.endDate),
      });
    } else {
      form.resetFields();
    }
  }, [event, form]);

  return (
    <Modal
      visible={visible}
      title={event ? 'Редактировать событие' : 'Новое событие'}
      okText={event ? 'Сохранить' : 'Создать'}
      cancelText="Отмена"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Название"
          rules={[{ required: true, message: 'Пожалуйста, введите название!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="startDate"
          label="Дата начала"
          rules={[{ required: true, message: 'Пожалуйста, выберите дату начала!' }]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
        <Form.Item
          name="endDate"
          label="Дата окончания"
          rules={[{ required: true, message: 'Пожалуйста, выберите дату окончания!' }]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EventForm;