import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 10,
    gap: 10,
  },
  fansBlock: {
    display: 'flex',
    flexDirection: 'column',

    paddingVertical: 5,
    paddingHorizontal: 10,

    borderBlockColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
  },
  fansBlock__number: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,

    borderBlockColor: 'red',
    borderWidth: 0.5,
    borderRadius: 5,

    width: '50%',
  },
  button__text: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'red',

    textAlign: 'center',
  },
});
