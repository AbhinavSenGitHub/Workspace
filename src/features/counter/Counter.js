import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCount,
} from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();


  return (
    <div className='bg-red-400'>
      counter
    </div>
  );
}
