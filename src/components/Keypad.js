import React from 'react';
import { ACTIONS } from './Calculator';

export const Keypad = ({ value, dispatch }) => {
  return (
    <input
      type="button"
      value={value}
      onClick={() => {
        dispatch(value);
      }}
    />
  );
};
