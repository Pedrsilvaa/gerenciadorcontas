
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2E2E2E",
        alignItems: 'center'
    },
    background: {
        width: '80%'
    },
    title: {
        fontSize: 24,
        color: "#E0E0E0",
        fontWeight: 'bold',
        marginTop: 25
    },
    content: {
        width: "80%",
        height: "75%",
        backgroundColor: "#282828",
        borderRadius: 8,
        alignItems: "center"
    },
    areaButtons: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    button: {
        backgroundColor: '#373737',
        width: 140,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center'
    },
    disabledButton: {
        backgroundColor: '#373737',
        width: 140,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        opacity: 0.375
    },
    textButton: {
        marginLeft: '26%',
        fontSize: 24,
        color: "#E0E0E0",
        fontWeight: 'bold'
    }
});
