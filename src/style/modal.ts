
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24, 24, 24, 0.7)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: "#2E2E2E",
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    title: {
        fontSize: 20,
        color: "#E0E0E0",
        fontWeight: 'bold'
    },
    areaCheckbox: {
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15
    },
    unitedCheckbox: {
        flexDirection: 'row'
    },
    checkbox: {
        marginRight: 5
    },
    checkboxLabel: {
        color: 'white'
    },
    areaSlider: {
        marginBottom: 15,
        width: '85%',
        backgroundColor: '#2F2F2F',
        borderRadius: 8
    },
    sliderLabel: {
        fontSize: 16,
        color: "#E0E0E0",
        marginBottom: 5
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
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
