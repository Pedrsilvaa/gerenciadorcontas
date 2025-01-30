
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2E2E2E",
        alignItems: 'center'
    },
    header: {
        width: '100%',
        height: 125,
        backgroundColor: "#1F1F1F"
    },
    title: {
        fontSize: 48,
        color: "#E0E0E0",
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 40
    },
    background: {
        width: '80%'
    },
    label: {
        marginTop: 90,
        marginBottom: 10,
        fontSize: 24,
        color: "#E0E0E0",
    },
    areaPassword: {
        flexDirection: 'row',
        marginBottom: 15
    },
    input: {
        width: '83%',
        height: 50,
        backgroundColor: '#373737',
        color: "#E0E0E0",
        fontSize: 20,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    buttonPassword: {
        width: 50,
        height: 50,
        backgroundColor: '#373737',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    image: {
        width: 30,
        height: 30
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#373737',
        borderRadius: 8
    },
    textButton: {
        marginLeft: '1%',
        fontSize: 24,
        color: "#E0E0E0",
        fontWeight: 'bold'
    }
});
