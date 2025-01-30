
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../style/accountItem";

export function AccountItem({data, realizeAction}: {data: {name: string, password: string}, realizeAction: (key: string) => void}) {
    return (
        <TouchableOpacity onPress={() => realizeAction(data.name)} style={styles.container}>
            <Text style={styles.text}>{data.name}</Text>
        </TouchableOpacity>
    );
}
