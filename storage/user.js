import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUser() {
    return AsyncStorage.getItem("@VIGNESHWARA_user");
}

export async function setAccessToken(value) {
    await AsyncStorage.setItem("@VIGNESHWARA_user", value);
}

export async function clearAccessToken() {
    await AsyncStorage.removeItem("@VIGNESHWARA_user");
}