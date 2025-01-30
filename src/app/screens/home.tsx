
import { View, Image, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { styles } from "../../style/home";
import React, { useState, useEffect } from "react";
import { AccountItem } from "../../components/accountItem"
import useStorage from "../../hooks/useStorage";
import * as Clipboard from "expo-clipboard";

export default function Home() {
    const router = useRouter();
    const [listAccounts, setListAccounts] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [key, setKey] = useState("");
    const { getItem } = useStorage();
    const path = usePathname();
    const focused = path === "/screens/home";

    useEffect(() => {
        async function LoadAccounts() {
            const accounts = await getItem("@accounts");
            setListAccounts(accounts);
        }
        
        LoadAccounts();
    }, [focused]);

    const realizeAction = (key: string) => {
        setDisabled(false);
        setKey(key);
    };

    const copyPassword = async () => {
        const accounts = await getItem("@accounts");
        const selectedAccount = accounts.find((account: {name: string, password: string}) => account.name === key);

        await Clipboard.setStringAsync(selectedAccount.password);

        alert("Senha copiada com sucesso!");
        setDisabled(true);
    };

    const editAccount = () => {
        router.push({
            pathname: "/screens/screenAccount",
            params: { key }
        });
        setDisabled(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Text style={styles.title}>Contas Salvas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    style={{
                        flex: 1,
                        paddingTop: 10
                    }}
                    data={listAccounts}
                    keyExtractor={(item: {name: string, password: string}) => item.name}
                    renderItem={({item}) => <AccountItem data={item} realizeAction={realizeAction} />}
                />
            </View>

            <View style={styles.areaButtons}>
                <TouchableOpacity
                    style={disabled ? styles.disabledButton : styles.button}
                    onPress={copyPassword}
                    disabled={disabled}
                >
                    <Text style={styles.textButton}>Copiar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={disabled ? styles.disabledButton : styles.button}
                    onPress={editAccount}
                    disabled={disabled}
                >
                    <Text style={styles.textButton}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
