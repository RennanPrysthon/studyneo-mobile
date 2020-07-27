import AsyncStorage from "@react-native-community/async-storage";

const getUser = () => AsyncStorage.getItem('@RNAuth:user');

const Storage = {
  getUser
};

export default Storage;
