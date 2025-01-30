
import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    const getItem = async (key: string) => {
        try {
            const accounts = await AsyncStorage.getItem(key);
            return accounts ? JSON.parse(accounts) : [];
        }
        catch(error) {
            alert("As contas não foram buscadas. Tente novamente");
            console.log("Erro ao buscar contas: ", error);
            return [];
        }
    };

    const saveItem = async (key: string, value: object) => {
        try {
            let accounts = await getItem(key);
            accounts.push(value);
            
            await AsyncStorage.setItem(key, JSON.stringify(accounts));
            return true;
        }
        catch(error) {
            console.log("Erro ao salvar contas: ", error);
            return false;
        }
    };

    const editItem = async (key: string, item: string, value: object) => {
        try {
            let accounts = await getItem(key);
            const index = accounts.findIndex((account: any) => account.name === item);

            accounts[index] = value;

            await AsyncStorage.setItem(key, JSON.stringify(accounts));
            return true;
        }
        catch(error) {
            console.log("Erro ao editar conta: ", error);
            return false;
        }
    };

    const removeItem = async (key: string, item: string) => {
        try {
            let accounts = await getItem(key);
            const index = accounts.findIndex((account: any) => account.name === item);

            accounts.splice(index, 1);

            await AsyncStorage.setItem(key, JSON.stringify(accounts));
            return true;
        }
        catch(error) {
            console.log("Erro ao remover conta: ", error);
            return false;
        }
    };

    return {
        getItem,
        saveItem,
        editItem,
        removeItem
    };
};

export default useStorage;
