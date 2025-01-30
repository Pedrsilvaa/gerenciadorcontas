
import Checkbox from "expo-checkbox";
import Slider from "@react-native-community/slider";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../style/modal";

export function ModalConfigGenerator({
    handleClose,
    isLetterChecked,
    setLetterChecked,
    isDigitChecked,
    setDigitChecked,
    isSymbolChecked,
    setSymbolChecked,
    size,
    setSize,
}: {
    handleClose: () => void;
    isLetterChecked: boolean;
    setLetterChecked: (value: boolean) => void;
    isDigitChecked: boolean;
    setDigitChecked: (value: boolean) => void;
    isSymbolChecked: boolean;
    setSymbolChecked: (value: boolean) => void;
    size: number;
    setSize: (value: number) => void;
}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Configurações</Text>
                <View style={styles.areaCheckbox}>
                    <View style={styles.unitedCheckbox}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isLetterChecked}
                            onValueChange={setLetterChecked}
                            color={isLetterChecked ? '#1F1F1F' : undefined}
                        />
                        <Text style={styles.checkboxLabel}>Letras</Text>
                    </View>
                    <View style={styles.unitedCheckbox}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isDigitChecked}
                            onValueChange={setDigitChecked}
                            color={isDigitChecked ? '#1F1F1F' : undefined}
                        />
                        <Text style={styles.checkboxLabel}>Dígitos</Text>
                    </View>
                    <View style={styles.unitedCheckbox}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isSymbolChecked}
                            onValueChange={setSymbolChecked}
                            color={isSymbolChecked ? '#1F1F1F' : undefined}
                        />
                        <Text style={styles.checkboxLabel}>Símbolos</Text>
                    </View>
                </View>
                <Text style={styles.sliderLabel}>Quantidade de caracteres: {size}</Text>
                <View style={styles.areaSlider}>
                    <Slider
                        style={{ height: 50 }}
                        minimumValue={8}
                        maximumValue={20}
                        maximumTrackTintColor="#151515"
                        minimumTrackTintColor="#2A2A2A"
                        thumbTintColor="#353535"
                        value={size}
                        onValueChange={ (value) => setSize(parseInt(value.toFixed(0))) }
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleClose}
                >
                    <Text style={styles.textButton}>Confimar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
