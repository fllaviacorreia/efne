import { AuthContextType, loginType, registerType, userType } from '@/constants/types';
import { loginFirebase, registerFirebase } from '@/firebase/authentication';
import { getUser } from '@/firebase/users';
import * as SecureStore from 'expo-secure-store';
import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native"

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    isFirstAccess: true,
    keepConnected: false,
    user: { username: "", born: new Date(), gender: "outro", loginId: "", name: "", slug: "responsavel", status: "ativo" },

    login: async () => { },
    register: async () => { },
    forgotPassword: async () => { },
    resetPassword: async () => { },
    logout: async () => { },
    editProfile: async () => { },
})

function AuthProvider({ children }: any) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isFirstAccess, setIsFirstAccess] = useState<boolean>(true);
    const [keepConnected, setKeepConnected] = useState<boolean>(false);

    const [user, setUser] = useState<userType>({ 
        username: "", 
        born: new Date(), 
        gender: "outro", 
        loginId: "", 
        name: "", 
        slug: "responsavel", 
        status: "ativo" 
    });

    const loadStoredData = async () => {
        try {
            const user = await SecureStore.getItemAsync('efne-user');
            const keepConnected = await SecureStore.getItemAsync('efne-keepConnected');
            const isFirstAccess = await SecureStore.getItemAsync('efne-isFirstAccess');

            if (user && keepConnected && isFirstAccess) {
                setKeepConnected(JSON.parse(keepConnected));
                setIsFirstAccess(JSON.parse(isFirstAccess));

                if (keepConnected) {
                    setIsAuthenticated(true);
                }
            }

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        loadStoredData();
    }, [loadStoredData]);

    const login = async ({ username, password, keepConnected }: loginType) => {
        try {
            const user = await loginFirebase(username, password);
        
            if (user) {
                const dataUser = await getUser(user.uid);

                if (dataUser) {                    
                    setUser({
                        username,
                        name: dataUser.name ?? "",
                        gender: dataUser.gender ?? "outro",
                        born: dataUser.born ?? new Date(),
                        status: dataUser.status ?? "ativo",
                        slug: dataUser.slug ?? "responsavel",
                        loginId: user.uid,
                    })

                    await SecureStore.setItemAsync('efne-user', JSON.stringify(user));
                    setIsAuthenticated(true);

                    if (keepConnected) {
                        await SecureStore.setItemAsync('efne-keepConnected', JSON.stringify(keepConnected));
                        await SecureStore.setItemAsync('efne-isFirsAccess', JSON.stringify(false));
                    }
                } else {
                    Alert.alert("Login", "Erro ao buscar dados da conta." + dataUser);
                }
            } else {
                Alert.alert("Login", "Erro ao logar na sua conta." + user);
            }
        } catch (e) {
            Alert.alert("Login", "Não foi possível logar. Tente novamente mais tarde.");
            console.error(e)
        }
    }

    const register = async ({ name, born, gender, slug, username, password }: registerType) => {
        try {
            const user = await registerFirebase(username, password);

            if (user) {
                setIsFirstAccess(false);

                await SecureStore.setItemAsync('efne-user', JSON.stringify({ username: username, name: name }));
            }
        } catch (e) {
            Alert.alert("Cadastro", "Não foi possível cadastrar. Tente novamente mais tarde.");
        }
    }

    const forgotPassword = async () => {
        try {

        } catch (e) {
            Alert.alert("Esqueci minha senha", "Não foi possível enviar o email. Tente novamente mais tarde.");
        }
    }

    const resetPassword = async () => {
        try {

        } catch (e) {
            Alert.alert("Recuperar minha senha", "Não foi possível recuperar a senha. Tente novamente mais tarde.");
        }
    }

    const logout = async () => {
        try {

        } catch (e) {
            Alert.alert("Logout", "Não foi possível deslogar. Tente novamente mais tarde.");
        }
    }

    const editProfile = async () => {
        try {

        } catch (e) {
            Alert.alert("Editar perfil", "Não foi possível editar. Tente novamente mais tarde.");
        }
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                isFirstAccess,
                keepConnected,
                user,
                login,
                register,
                forgotPassword,
                resetPassword,
                logout,
                editProfile
            }}

        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;