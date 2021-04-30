import {useRef, useState} from 'react';

enum Operators {
  add,
  sub,
  mul,
  div,
}

export const useCalc = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const makeNumber = (numText: string) => {
    if (number.includes('.') && numText === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      //decimal
      if (numText === '.') {
        setNumber(number + numText);
        //eval if another 0 && .
      } else if (numText === '0' && number.includes('.')) {
        setNumber(number + numText);
        //eval if != 0 && ! .
      } else if (numText !== '0' && !number.includes('.')) {
        setNumber(numText);
      } else if (numText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number);
      }
    } else {
      setNumber(number + numText);
    }
  };

  const posNeg = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const del = () => {
    let neg = '';
    let tempNum = number;

    if (number.includes('-')) {
      neg = '-';
      tempNum = number.substr(1);
    }

    if (tempNum.length > 1) {
      setNumber(neg + number.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeToPrevNum = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const btnDiv = () => {
    changeToPrevNum();
    lastOperation.current = Operators.div;
  };

  const btnMul = () => {
    changeToPrevNum();
    lastOperation.current = Operators.mul;
  };

  const btnAdd = () => {
    changeToPrevNum();
    lastOperation.current = Operators.add;
  };

  const btnSub = () => {
    changeToPrevNum();
    lastOperation.current = Operators.sub;
  };

  const calc = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.sub:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.mul:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.div:
        setNumber(`${num2 / num1}`);
        break;
    }
  };

  return {
    clean,
    makeNumber,
    posNeg,
    del,
    btnDiv,
    btnMul,
    btnAdd,
    btnSub,
    calc,
    number,
    prevNumber,
  };
};
