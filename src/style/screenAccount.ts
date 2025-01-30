
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
    label: {
        fontSize: 18,
        color: "#E0E0E0",
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#373737',
        color: "#E0E0E0",
        fontSize: 20,
        borderRadius: 8,
    },
    disabledInput: {
        width: '100%',
        height: 50,
        backgroundColor: '#373737',
        color: "#E0E0E0",
        fontSize: 20,
        borderRadius: 8,
        opacity: 0.375
    },
    areaButtons: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    generatePasswordButton: {
        width: 230,
        height: 50,
        backgroundColor: '#373737',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    configGeneratorButton: {
        width: 50,
        height: 50,
        backgroundColor: '#373737',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    button: {
        width: 90,
        height: 90,
        backgroundColor: '#373737',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    textButton: {
        marginLeft: '1%',
        fontSize: 24,
        color: "#E0E0E0",
        fontWeight: 'bold'
    },
    disabledButton: {
        width: 90,
        height: 90,
        backgroundColor: '#373737',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        opacity: 0.375
    }
});
