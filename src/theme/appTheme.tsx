import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    //paddingHorizontal: 10,
  },

  calcContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
  },

  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },

  smallRes: {
    color: 'rgba(255,255,255,.5)',
    fontSize: 30,
    textAlign: 'right',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  btn: {
    height: 75,
    width: 75,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 5,
  },

  orange: {
    backgroundColor: '#FF9427',
  },

  dark: {
    backgroundColor: '#2D2D2D',
  },

  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 27,
    color: 'white',
    fontWeight: '300',
  },
});
