import AsyncStorage from '@react-native-community/async-storage';

const getTheme = () => AsyncStorage.getItem('@RNTheme:theme');
const setTheme = (token: string) => AsyncStorage.setItem('@RNTheme:theme', token);
const Storage = {
  getTheme,
  setTheme,
};

export default Storage;
