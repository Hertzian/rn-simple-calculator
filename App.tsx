import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalcScreen} from './src/screens/CalcScreen';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalcScreen />
    </SafeAreaView>
  );
};

export default App;
