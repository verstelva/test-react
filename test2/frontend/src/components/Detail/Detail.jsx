import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchServiceDetails } from '../../store/servicesSlice';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details, isLoading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServiceDetails(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return (
      <div>
        <div>Ошибка: {error}</div>
        <button onClick={() => dispatch(fetchServiceDetails(id))}>Повторить запрос</button>
      </div>
    );
  }

  if (!details) {
    return <div>Данные не найдены</div>;
  }

  return (
    <div>
      <h1>{details.name}</h1>
      <p>Цена: {details.price}</p>
      <p>{details.content}</p>
    </div>
  );
};

export default Details;