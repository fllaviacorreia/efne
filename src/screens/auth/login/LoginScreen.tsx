import { RoutesParamList } from "@/navigation/AppNavigaton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { Formik } from "formik";
import LoginSchema from "@/validators/loginSchema";
import { useAuth } from "@/context/AuthContext";
import { Button, CheckBox, Input, Layout, Text, useTheme } from "@ui-kitten/components";
import { Image } from "expo-image";
import styles from "./styles";
import { useAssets } from "expo-asset";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

type loginParamsList = NativeStackNavigationProp<RoutesParamList, "Login">;

export default function LoginScreen() {
  const { login } = useAuth();
  const [assets, error] = useAssets([require('assets/icon.png')]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<loginParamsList>();

  const passwordRef = useRef<Input>(null);

  const theme = useTheme();


  const onSubmitting = async (value: { username: string, password: string, keepConnected: boolean }) => {
    try {
      await login(value);
      setLoading(true);
    } catch (e) {
      alert("Erro ao logar.")
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: theme['background-basic-color-1'] }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Layout style={styles.container}>
        <Layout style={styles.containerImg}>
          <Image
            source={assets ? assets[0] : null}
            contentFit="contain"
            style={styles.image}
          />
        </Layout>

        {/* Container para o formulário de login */}
        <Layout style={styles.containerForm}>
          <Formik
            initialValues={{ username: '', password: '', keepConnected: false }}
            validationSchema={LoginSchema}
            onSubmit={(value) => onSubmitting(value)}
          >
            {
              ({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }) => (
                <Layout>
                  <Layout style={styles.containerInput}>
                    <Input
                      placeholder="Seu e-mail"
                      returnKeyType="next"
                      onSubmitEditing={() => passwordRef.current?.focus()}
                      autoCapitalize="none"
                      value={values.username}
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      status={touched.username ? "danger" : "basic"}
                    />
                    {touched.username ? <Text status="danger">{errors.username}</Text> : null}
                  </Layout>

                  <Layout style={styles.containerInput}>
                    <Input
                      placeholder="Sua senha"
                      secureTextEntry
                      ref={passwordRef}
                      autoCapitalize="none"
                      returnKeyType="done"
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      status={touched.password ? "danger" : "basic"}
                    />
                    {touched.password ? <Text status="danger">{errors.password}</Text> : null}
                  </Layout>


                  <Layout style={styles.containerCheckForgot}>
                    <CheckBox
                      checked={values.keepConnected}
                      onChange={(value) => setFieldValue('keepConnected', value)}
                    >
                      Mantenha-me conectado
                    </CheckBox>
                    <Button appearance="ghost" status="basic" size="small" onPress={() => navigation.navigate("ForgotPassword")}>
                      Esqueci minha senha
                    </Button>
                  </Layout>

                  <Button style={styles.button} size="medium" onPress={handleSubmit as any} disabled={loading}>{loading ? "Entrando..." : "Entrar"}</Button>
                </Layout>

              )
            }
          </Formik>
        </Layout>

        <Layout style={styles.containerFooter}>
          <Button
            appearance='outline'
            status="danger"
            size="small"
            style={styles.button}
            onPress={() => navigation.navigate("Register")}
          >
            Cadastrar-me
          </Button>
        </Layout>

        </Layout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}