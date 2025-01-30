
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import { styles } from "../../style/screenAccount";
import { ModalConfigGenerator } from "../../components/modal";
import { generate, useConfigGenerator } from "../../utils/generator";
import useStorage from "../../hooks/useStorage";
import { ifTextIsNull, ifAccountNameExists, positiveMessage, negativeMessage } from "../../utils/verifyText";

export default function Home() {
    const [accountName, setAccountName] = useState("");
    const [accountPassword, setAccountPassword] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [createDisabled, setCreateDisabled] = useState(false);
    const [accountNameDisabled, setAccountNameDisabled] = useState(false);

    const { key } = useLocalSearchParams();

    const { getItem, saveItem, editItem, removeItem } = useStorage();

    const { isLetterChecked, setLetterChecked,
        isDigitChecked, setDigitChecked,
        isSymbolChecked, setSymbolChecked,
        size, setSize
    } = useConfigGenerator();
    
    const account = {
        name: accountName,
        password: accountPassword
    };

    useEffect(() => {
        if(!key) return;
        
        async function loadAccount() {
            const accounts = await getItem("@accounts");
            const selectedAccount = accounts.find((account: {name: string, password: string}) => account.name === key);

            setAccountName(selectedAccount.name);
            setAccountPassword(selectedAccount.password);
            setAccountNameDisabled(true);
            setCreateDisabled(true);
            setDisabled(false);
        }

        loadAccount();
    }, [key]);

    const eraseTextField = () => {
        setAccountName("");
        setAccountPassword("");
    };

    const generatePassword = () => {
        setAccountPassword(generate({
            isLetterChecked,
            isDigitChecked,
            isSymbolChecked,
            size
        }));
    };

    const createAccount = async () => {
        if(ifTextIsNull(account.name, account.password) === false) {
            if(await ifAccountNameExists(account.name) === false) {
                const confirm = await saveItem("@accounts", account);

                if(confirm) positiveMessage("cre");
                else negativeMessage("cre");

                eraseTextField();
            }
        }
    };

    const updateAccount = async () => {
        if(!ifTextIsNull("@accounts", account.password)) {
            const confirm = await editItem("@accounts", account.name, account);

            if(confirm) {
                positiveMessage("edi");
                eraseTextField();
                setDisabled(true);
                setCreateDisabled(false);
                setAccountNameDisabled(false);
            }
            else negativeMessage("edi");
        }
    };

    const deleteAccount = async () => {
        const confirm = await removeItem("@accounts", account.name);

        if(confirm) {
            positiveMessage("del");
            eraseTextField();
            setDisabled(true);
            setCreateDisabled(false);
            setAccountNameDisabled(false);
        }
        else negativeMessage("del");
    };

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Text style={styles.title}>Guardar Contas</Text>

                <Text style={styles.label}>Digite um nome</Text>
                <TextInput
                    style={accountNameDisabled ? styles.disabledInput : styles.input}
                    maxLength={20}
                    value={accountName}
                    onChangeText={setAccountName}
                    readOnly={accountNameDisabled}
                />

                <Text style={styles.label}>Digite uma senha</Text>
                <TextInput
                    style={styles.input}
                    maxLength={20}
                    value={accountPassword}
                    onChangeText={setAccountPassword}
                />

                <View style={{ marginTop: 35 }}>
                    <View style={styles.areaButtons}>
                        <TouchableOpacity
                            style={styles.generatePasswordButton}
                            onPress={generatePassword}
                        >
                            <Text style={styles.textButton}>Gerar senha</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.configGeneratorButton}
                            onPress={() => setModalVisible(true)}
                        >
                            <Image source={require("../../../assets/config.png")} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.areaButtons}>
                        <TouchableOpacity
                            style={createDisabled ? styles.disabledButton : styles.button}
                            onPress={createAccount}
                            disabled={createDisabled}
                        >
                            <Image source={require("../../../assets/create.png")} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={disabled ? styles.disabledButton : styles.button}
                            onPress={updateAccount}
                            disabled={disabled}
                        >
                            <Image source={require("../../../assets/update.png")} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={disabled ? styles.disabledButton : styles.button}
                            onPress={deleteAccount}
                            disabled={disabled}
                        >
                            <Image source={require("../../../assets/delete.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <ModalConfigGenerator
                    handleClose={() => setModalVisible(false)}
                    isLetterChecked={isLetterChecked}
                    setLetterChecked={setLetterChecked}
                    isDigitChecked={isDigitChecked}
                    setDigitChecked={setDigitChecked}
                    isSymbolChecked={isSymbolChecked}
                    setSymbolChecked={setSymbolChecked}
                    size={size}
                    setSize={setSize}
                />
            </Modal>
        </View>
    );
}
