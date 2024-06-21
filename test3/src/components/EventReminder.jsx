import { useEffect } from 'react';
import { notification } from 'antd';

const EventReminder = ({ event }) => {
  useEffect(() => {
    const remindTime = new Date(new Date(event.startDate).getTime() - event.remindBeforeMinutes * 60000);
    const now = new Date();
   
    if (remindTime > now) {
      const timeoutId = setTimeout(() => {
        notification.info({
          message: `Напоминание о событии`,
          description: `Пора готовиться к событию: ${event.title}`
        });
      }, remindTime - now);
      
      return () => clearTimeout(timeoutId);
    }
  }, [event]);

  return null;
};

export default EventReminder;