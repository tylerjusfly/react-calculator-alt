import React from 'react';
import { Keypad } from './Keypad';

export const useCreateDigits = (addToView) => {
  const digits = [9, 8, 7, '+', 6, 5, 4, '-', 3, 2, 1, '*', 0, '/', '%'];

  const keydigit = [];

  for (let i = 0; i < digits.length; i++) {
    keydigit.push(<Keypad key={i} value={digits[i]} dispatch={addToView} />);
  }
  return keydigit;
};
