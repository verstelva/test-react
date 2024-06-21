import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchServices } from '../../store/servicesSlice';

const List = () => {
  const dispatch = useDispatch();
  const { services, isLoading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <ul>
      {services?.map((service) => (
        <li key={service.id}>
          <Link to={`/${service.id}/details`}>{service.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default List;