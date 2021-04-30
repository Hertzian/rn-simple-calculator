import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {BtnCalc} from '../components/BtnCalc';

enum Operators {
  add,
  sub,
  mul,
  div,
}

export const CalcScreen = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operators>('');

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

  return (
    <View style={styles.calcContainer}>
      {prevNumber !== '0' && <Text style={styles.smallRes}>{prevNumber}</Text>}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <BtnCalc color="#9B9B9B" text="c" action={clean} />
        <BtnCalc color="#9B9B9B" text="+/-" action={posNeg} />
        <BtnCalc color="#9B9B9B" text="del" action={del} />
        <BtnCalc color="#FF9427" text="/" action={btnDiv} />
      </View>

      <View style={styles.row}>
        <BtnCalc text="7" action={makeNumber} />
        <BtnCalc text="8" action={makeNumber} />
        <BtnCalc text="9" action={makeNumber} />
        <BtnCalc color="#FF9427" text="x" action={btnMul} />
      </View>

      <View style={styles.row}>
        <BtnCalc text="4" action={makeNumber} />
        <BtnCalc text="5" action={makeNumber} />
        <BtnCalc text="6" action={makeNumber} />
        <BtnCalc color="#FF9427" text="-" action={btnSub} />
      </View>

      <View style={styles.row}>
        <BtnCalc text="1" action={makeNumber} />
        <BtnCalc text="2" action={makeNumber} />
        <BtnCalc text="3" action={makeNumber} />
        <BtnCalc color="#FF9427" text="+" action={btnAdd} />
      </View>

      <View style={styles.row}>
        <BtnCalc text="0" wide action={makeNumber} />
        <BtnCalc text="." action={makeNumber} />
        <BtnCalc color="#FF9427" text="=" action={changeToPrevNum} />
      </View>
    </View>
  );
};
