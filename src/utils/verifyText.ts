
import useStorage from "../hooks/useStorage";

const { getItem } = useStorage();

const ifTextIsNull = (name: string, password: string) => {
    if(!name || !password) {
        alert("Preencha todos os campos de texto corretamente");
        return true;
    }
    return false;
};

const ifAccountNameExists = async (name: string) => {
    const accounts = await getItem("@accounts");
    if(accounts.find((account: any) => account.name === name)) return true;
    return false;
};

const positiveMessage = (type: string) => {
    if(type === "cre") alert("Conta guardada com sucesso");
    else if(type === "edi") alert("Conta editada com sucesso");
    else alert("Conta deletada com sucesso");
};

const negativeMessage = (type: string) => {
    if(type === "cre") alert("Não foi possível guardar a conta. Tente novamente");
    else if(type === "edi") alert("Não foi possível editar a conta. Tente novamente");
    else alert("Não foi possível remover a conta. Tente novamente");
};

export { ifTextIsNull, ifAccountNameExists, positiveMessage, negativeMessage };
