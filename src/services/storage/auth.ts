import AsyncStorage from '@react-native-community/async-storage';

const getUser = () => AsyncStorage.getItem('@RNAuth:user');
const setUser = (token: string) => AsyncStorage.setItem('@RNAuth:user', token);
const clear = () => AsyncStorage.clear();
const Storage = {
  getUser,
  setUser,
  clear,
};

export default Storage;
