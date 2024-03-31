import { StyleSheet } from "react-native";

export const colorsTheme = {
    primary: 'gold',
    secondary: 'blue',
    tertiary: 'gray',
    background: 'black'
}

export const appTheme = StyleSheet.create({
    globalMargin:{
        marginHorizontal: 20,
    },
    globalContainer:{
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    title:{
        fontSize: 30,
        marginBottom: 10,
    },
    avatar:{
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: "red",
        borderWidth: 5
    },
    avatarContainer:{
        alignItems: "center"
    },
    menuContainer:{
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10,
    },
    menuBtn:{
        marginVertical: 10,
    },
    menuText:{
        fontSize: 20,
    },
    input:{
        borderRadius: 10,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
        height: 50,
        width: 280,
        margin: 12,
        borderWidth: 5,
        borderColor: "black",
    },
    input1:{
        height: 40,
        width: 300,
        margin: 10,
        borderWidth: 1,
        borderColor: "pink",
    }
});