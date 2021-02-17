import initialState from "../redux/reducers/initialState";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadState = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@state')
        let data = jsonValue != null ? JSON.parse(jsonValue) : initialState;
        return data;
    } catch (e) {
        alert("Error reading state");
    }
};

export const saveState = async (state) => {
    try {
        const jsonValue = JSON.stringify(state)
        await AsyncStorage.setItem('@state', jsonValue)
    } catch (e) {
        console.log(e);
        alert("Error saving");
    }
};

export const removeState = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        alert("Error clearing state");
    }
};
