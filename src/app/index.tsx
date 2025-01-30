
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../style/index";

export default function Index() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [imageButton, setImageButton] = useState(require("../../assets/visible.png"));
    const router = useRouter();

    const alterVisibily = () => {
        if(showPassword === false) {
            setShowPassword(true);
            setImageButton(require("../../assets/hidden.png"));
        }
        else {
            setShowPassword(false);
            setImageButton(require("../../assets/visible.png"));
        }
    };
  
    /*
     * NÃO ESQUEÇA DE COLOCAR UMA SENHA AQUI
    */
    const access = () => {
        if(password === "") router.replace("/screens/home");
        else {
            alert("Senha incorreta");
            setPassword("");
        }
    };
  
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.background}>
                <Text style={styles.label}>Digite a senha</Text>
                <View style={styles.areaPassword}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        style={styles.buttonPassword}
                        onPress={alterVisibily}
                    >
                    <Image
                        source={imageButton}
                        style={styles.image}
                    />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={access}
                >
                    <Text style={styles.textButton}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
