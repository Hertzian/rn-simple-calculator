import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {BtnCalc} from '../components/BtnCalc';
import {useCalc} from '../hooks/useCalc';

export const CalcScreen = () => {
  const {
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
  } = useCalc();

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
        <BtnCalc color="#FF9427" text="=" action={calc} />
      </View>
    </View>
  );
};
