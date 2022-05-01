import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ErrorItem from './errorItem';
const Error = () => {
  const states = useSelector((state) => state.accountState);
  return (
    <>
      <div style={{ position: 'fixed', right: '0', top: '0', zIndex: '999' }}>
        {states.errors.map((errorItem) => {
          return <ErrorItem errorItem={errorItem} />;
        })}
      </div>
    </>
  );
};

export default Error;
