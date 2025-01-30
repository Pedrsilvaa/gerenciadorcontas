
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { View, Image, StyleSheet } from "react-native";

export default function Layout() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("../../../assets/logo.png")}
                    style={styles.logo}
                />
            </View>
            <Tabs screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: "#1F1F1F" },
                tabBarIconStyle: { color: "#E0E0E0" }
            }}>
                <Tabs.Screen name="home" options={{
                    title: "Contas",
                    tabBarIcon: ({ focused, color, size }) => {
                        if(focused) return <FontAwesome name="home" color={color} size={size}/>
                        return <FontAwesome name="home" color={color} size={size}/>
                    }
                }}/>
                <Tabs.Screen name="screenAccount" options={{
                    title: "Criar/Editar",
                    tabBarIcon: ({ focused, color, size }) => {
                        if(focused) return <FontAwesome name="edit" color={color} size={size}/>
                        return <FontAwesome name="edit" color={color} size={size}/>
                    }
                }}/>
            </Tabs>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 125,
        backgroundColor: "#1F1F1F",
    },
    logo: {
        marginTop: 30,
        marginLeft: 40,
        width: '45%',
        height: '55%',
    },
});