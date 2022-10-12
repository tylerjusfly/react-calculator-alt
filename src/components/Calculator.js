import React, { useState } from 'react';
import { useCreateDigits } from './useCreateDigits';

export const Calculator = () => {
  const [calc, setCalc] = useState('');

  const ops = ['+', '/', '-', '%', '*'];

  const addToView = (val) => {
    if (
      (ops.includes(val) && calc === '') ||
      (ops.includes(val) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + val);
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const clearAll = () => {
    setCalc('');
  };

  return (
    <div className="Parent-Calculator-Holder">
      <form action="">
        <input type="text" disabled value={calc || 0} />
        <br />
        <div className="Keys">
          {useCreateDigits(addToView)}
          <input value={'='} type="button" onClick={calculate} />
        </div>
        <input type="button" value="CLEAR" id="delbtn" onClick={clearAll} />
      </form>
    </div>
  );
};
