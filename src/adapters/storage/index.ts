import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(`@${key}`, JSON.stringify(value));
  } catch (e) {
    throw new Error(`Failed to save ${key} in storage`);
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
    return value;
  } catch (e) {
    throw new Error(`Failed to retrieve ${key} from storage`);
  }
};

export const deleteData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(`@${key}`);
  } catch (e) {
    throw new Error(`Failed to remove ${key} from storage`);
  }
};
