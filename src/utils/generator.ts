
import { useState } from "react";

const getRandomInt = (num: number) => Math.floor(Math.random() * num);

const useConfigGenerator = () => {
    const [isLetterChecked, setLetterChecked] = useState(true);
    const [isDigitChecked, setDigitChecked] = useState(true);
    const [isSymbolChecked, setSymbolChecked] = useState(true);
    const [size, setSize] = useState(20);

    return {
        isLetterChecked, setLetterChecked,
        isDigitChecked, setDigitChecked,
        isSymbolChecked, setSymbolChecked,
        size, setSize,
    };
};

const generate = ({
    isLetterChecked,
    isDigitChecked,
    isSymbolChecked,
    size
}: {
    isLetterChecked: boolean;
    isDigitChecked: boolean;
    isSymbolChecked: boolean;
    size: number;
}) => {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        digits = "0123456789",
        symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/\\",
        characters = "", password = "";
        
    if(isLetterChecked && !isDigitChecked && !isSymbolChecked) characters = letters;
    else if(!isLetterChecked && isDigitChecked && !isSymbolChecked) characters = digits;
    else if(!isLetterChecked && !isDigitChecked && isSymbolChecked) characters = symbols;
    else if(isLetterChecked && isDigitChecked && !isSymbolChecked) characters = letters + digits;
    else if(isLetterChecked && !isDigitChecked && isSymbolChecked) characters = letters + symbols;
    else if(!isLetterChecked && isDigitChecked && isSymbolChecked) characters = digits + symbols;
    else characters = letters + digits + symbols;
        
    for(let i = 0; i < size; i++) password += characters.charAt(getRandomInt(characters.length));
        
    return password;
};

export { generate, useConfigGenerator };
