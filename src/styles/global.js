import { StyleSheet, StatusBar } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight || 40,
        flex: 1,
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 24,
        color: '#333',
    },
    screenOptions:{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
    },
})