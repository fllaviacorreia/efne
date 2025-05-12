import { RoutesParamList } from "@/navigation/AppNavigaton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, ToastAndroid } from "react-native";
import { Formik } from "formik";
import { fullMaxDate, fullMinDate, initialValuesAthlete, positions, shifts, years } from "@/constants/defaultValues";
import saveAthleteSchema from "@/validators/saveAthleteSchema";
import { Button, CheckBox, Datepicker, Divider, Icon, IndexPath, Input, Layout, Select, SelectItem, Text, useTheme } from "@ui-kitten/components";
import { useAthletesContext } from "@/context/AthletesContext";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { useCategoriesContext } from "@/context/CategoriesContext";
import { useRef } from "react";
import { AthleteType } from "@/constants/types";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Image } from "expo-image";
import * as ImagePicker from 'expo-image-picker';

type newAthleteScreenProp = NativeStackNavigationProp<RoutesParamList, "NewAthlete">;

export default function NewAthleteScreen() {
  const navigation = useNavigation<newAthleteScreenProp>();
  const { createAthlete } = useAthletesContext();
  const theme = useTheme();
  const [selectedIndexCategory, setSelectedIndexCategory] = useState<IndexPath | IndexPath[] | undefined>(undefined);
  const [selectedIndexPosition, setSelectedIndexPosition] = useState<IndexPath | IndexPath[] | undefined>(undefined);
  const [selectedIndexShiftSchool, setSelectedIndexShiftSchool] = useState<IndexPath | IndexPath[] | undefined>(undefined);
  const [selectedIndexYearSchool, setSelectedIndexYearSchool] = useState<IndexPath | IndexPath[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  //personal data
  const nameRef = useRef<Input>(null);
  const nameMotherRef = useRef<Input>(null);
  const nameFatherRef = useRef<Input>(null);
  const bornRef = useRef<Datepicker>(null);
  const aditionalInformationRef = useRef<Input>(null);

  // athlete data
  const positionRef = useRef<Select>(null);
  const weightRef = useRef<Input>(null);
  const heightRef = useRef<Input>(null);
  const categoriesRef = useRef<Select>(null);

  // contact data
  const phoneRef = useRef<Input>(null);
  const emailRef = useRef<Input>(null);
  const streetRef = useRef<Input>(null);
  const neighborhoodRef = useRef<Input>(null);
  const numberRef = useRef<Input>(null);
  const referencePointRef = useRef<Input>(null);
  const cityRef = useRef<Input>(null);
  const zipCodeRef = useRef<Input>(null);

  // school data
  const institutionRef = useRef<Input>(null);
  const shiftRef = useRef<Select>(null);
  const yearRef = useRef<Select>(null);
  const { categories } = useCategoriesContext();

  const handleSubmit = async (values: AthleteType) => {
    setLoading(true);
    try {
      await createAthlete(values);
      ToastAndroid.show("Atleta cadastrado com sucesso!", ToastAndroid.LONG);
      setLoading(false);
      navigation.goBack();

    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };

  if (categories.length === 0) {
    return (
      <Layout style={{ ...styles.container, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h5'>Nenhuma categoria cadastrada.</Text>
        <Text category='h6'>Cadastre uma categoria antes de cadastrar um atleta.</Text>
        <Layout style={{ ...styles.row, height: 'auto', marginTop: 20 }}>
          <Button
            onPress={() => navigation.goBack()}
            status="warning"
            style={{ ...styles.button, width: '100%' }}
          >Voltar</Button>
        </Layout>
      </Layout>
    )
  }


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={64} // ajuste conforme seu header
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 1 }}
          keyboardShouldPersistTaps="handled"
        >

          <Formik
            initialValues={initialValuesAthlete}
            validationSchema={saveAthleteSchema}
            onSubmit={handleSubmit}
          >
            {({ values, touched, errors, setFieldValue, handleSubmit, validateForm, handleChange }) => (
              <Layout style={styles.container}>
                <Layout style={styles.containerImg}>
                  <Image source={values.photo ? { uri: values.photo} : require("../../../assets/person_default.jpg")} style={styles.image} />
                  <Layout style={styles.containerInput}>
                    <Button status='primary' style={styles.button} onPress={async () => {
                      const result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ['images'],                        
                        allowsEditing: true,
                        quality: 0.7,
                      });

                      if (!result.canceled) {
                        setFieldValue('photo', result.assets[0].uri);
                      }
                    }}>Adicionar foto</Button>
                  </Layout>


                  {errors.photo && touched.photo && (
                    <Text status="danger">{errors.photo}</Text>
                  )}
                </Layout>
                <Layout style={styles.containerForm}>
                  <Layout>
                    <Layout style={styles.row}>
                      <Divider style={styles.divider} />
                      <Text category='h5'>Dados pessoais</Text>
                      <Divider style={styles.divider} />
                    </Layout>
                    <Layout style={styles.containerInput}>
                      <Input
                        placeholder="Nome do atleta"
                        ref={nameRef}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                          if (nameMotherRef.current) {
                            nameMotherRef.current.focus();
                          }
                        }}
                        autoCapitalize="words"
                        autoCorrect={false}
                        autoComplete="name"
                        value={values.name}
                        onChangeText={handleChange('name')}
                        status={touched.name ? "info" : "basic"}
                      />
                      {errors.name && <Text status="danger">{errors.name}</Text>}
                    </Layout>
                    <Layout style={styles.containerInput}>
                      <Input
                        placeholder="Nome da mãe"
                        ref={nameMotherRef}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                          if (nameFatherRef.current) {
                            nameFatherRef.current.focus();
                          }
                        }}
                        autoCapitalize="words"
                        autoCorrect={false}
                        autoComplete="name"
                        value={values.mother}
                        onChangeText={handleChange('mother')}
                        status={errors.mother ? "danger" : touched.mother ? "info" : "basic"}
                      />
                      {errors.mother && <Text status="danger">{errors.mother}</Text>}
                    </Layout>
                    <Layout style={styles.containerInput}>
                      <Input
                        placeholder="Nome do pai"
                        ref={nameFatherRef}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                          if (bornRef.current) {
                            bornRef.current.focus();
                          }
                        }}
                        autoCapitalize="words"
                        autoCorrect={false}
                        autoComplete="name"
                        value={values.father}
                        onChangeText={handleChange('father')}
                        status={errors.father ? "danger" : touched.father ? "info" : "basic"}
                      />
                      {errors.father && <Text status="danger">{errors.father}</Text>}
                    </Layout>

                    <Layout style={styles.containerInput}>
                      <Datepicker
                        placeholder='Data de nascimento'
                        ref={bornRef}
                        min={fullMinDate}
                        max={fullMaxDate}
                        date={values.born}
                        onSelect={(date) => {
                          setFieldValue('born', date);
                          aditionalInformationRef.current?.focus();
                        }
                        }
                        status={errors.born ? "danger" : touched.born ? "info" : "basic"}
                        accessoryRight={<Icon name="calendar" />}
                      />
                      {errors.born && typeof errors.born === 'string' && (
                        <Text status="danger">{errors.born}</Text>
                      )}
                    </Layout>
                    <Layout style={[styles.containerInput, { minHeight: 60, height: 60 }]}>
                      <Input
                        style={{ minHeight: 60, height: 60 }}
                        multiline={true}
                        placeholder="Informações adicionais"
                        ref={aditionalInformationRef}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                          if (positionRef.current) {
                            positionRef.current.focus();
                          }
                        }}
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        autoComplete="off"
                        value={values.aditionalInformation}
                        onChangeText={handleChange('aditionalInformation')}
                        status={errors.aditionalInformation ? "danger" : touched.aditionalInformation ? "info" : "basic"}
                      />
                      {errors.aditionalInformation && <Text status="danger">{errors.aditionalInformation}</Text>}
                    </Layout>
                  </Layout>
                </Layout>
                <Layout>
                  <Layout style={styles.row}>
                    <Divider style={styles.divider} />
                    <Text category='h5'>Dados do atleta</Text>
                    <Divider style={styles.divider} />
                  </Layout>
                  <Layout style={styles.containerInput}>
                    <Select
                      placeholder="Posição"
                      ref={positionRef}
                      value={selectedIndexPosition instanceof IndexPath ? positions[selectedIndexPosition.row] : ''}
                      selectedIndex={selectedIndexPosition}
                      status={errors.position ? "danger" : touched.position ? "info" : "basic"}
                      onSelect={(index) => {
                        setSelectedIndexPosition(index as IndexPath);
                        setFieldValue('position', positions[(index as IndexPath).row]);
                        if (weightRef.current) {
                          weightRef.current.focus();
                        }
                      }}
                    >
                      {[
                        ...positions.map((position, index) => <SelectItem key={`${index}.${position}`} title={position} />),
                      ]}
                    </Select>
                    {touched.position ? <Text status="danger">{errors.position}</Text> : null}
                  </Layout>

                  <Layout style={styles.containerInput}>
                    <Input
                      placeholder="Peso (Kg)"
                      ref={weightRef}
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        if (heightRef.current) {
                          heightRef.current.focus();
                        }
                      }
                      }
                      autoCapitalize="none"
                      autoCorrect={false}
                      autoComplete="off"
                      keyboardType="numeric"
                      value={values.weight}
                      onChangeText={handleChange('weight')}
                      status={errors.weight ? "danger" : touched.weight ? "info" : "basic"}
                    />
                    {touched.weight ? <Text status="danger">{errors.weight}</Text> : null}
                  </Layout>
                  <Layout style={styles.containerInput}>
                    <Input
                      placeholder="Altura (cm)"
                      ref={heightRef}
                      onSubmitEditing={() => {
                        if (categoriesRef.current) {
                          categoriesRef.current.focus();
                        }
                      }
                      }
                      autoCapitalize="none"
                      autoCorrect={false}
                      autoComplete="off"
                      keyboardType="numeric"

                      returnKeyType="next"

                      value={values.height}
                      onChangeText={handleChange('height')}
                      status={errors.height ? "danger" : touched.height ? "info" : "basic"}
                    />
                    {touched.height ? <Text status="danger">{errors.height}</Text> : null}
                  </Layout>
                  <Layout style={styles.containerInput}>
                    <Select
                      disabled={categories.length === 0}
                      placeholder={categories.length === 0 ? "Nenhuma categoria cadastrada." : "Selecione uma categoria"}
                      ref={categoriesRef}
                      selectedIndex={selectedIndexCategory}
                      value={selectedIndexCategory instanceof IndexPath ? categories[selectedIndexCategory.row].name : ''}
                      status={errors.category ? "danger" : touched.category ? "info" : "basic"}
                      onSelect={(index) => {
                        setSelectedIndexCategory(index as IndexPath);
                        setFieldValue('category', categories[(index as IndexPath).row].id);
                        if (institutionRef.current) {
                          institutionRef.current.focus();
                        }
                      }}
                    >
                      {[
                        ...categories.map((category) => <SelectItem key={category.id} title={category.name} />),
                      ]}
                    </Select>
                    {touched.category && errors.category ? <Text status="danger">{String(errors.category)}</Text> : null}
                  </Layout>
                  <Layout style={styles.containerForm}>
                    <Layout>
                      <Layout style={styles.row}>
                        <Divider style={styles.divider} />
                        <Text category='h5'>Dados escolares</Text>
                        <Divider style={styles.divider} />
                      </Layout>
                      <Layout style={styles.containerInput}>
                        <Input
                          placeholder="Nome da escola"
                          ref={institutionRef}
                          returnKeyType="next"
                          onSubmitEditing={() => {
                            if (shiftRef.current) {
                              shiftRef.current.focus();
                            }
                          }}
                          value={values.school.institution}
                          onChangeText={handleChange('school.institution')}
                          status={errors.school?.institution ? "danger" : touched.school?.institution ? "info" : "basic"}
                        />
                        {errors.school?.institution && <Text status="danger">{errors.school?.institution}</Text>}
                      </Layout>
                      <Layout style={styles.containerInput}>
                        <Select
                          disabled={shifts.length === 0}
                          placeholder={shifts.length === 0 ? "Nenhum turno cadastrado." : "Selecione um turno"}
                          ref={shiftRef}
                          status={errors.school?.shift ? "danger" : touched.school?.shift ? "info" : "basic"}
                          selectedIndex={selectedIndexShiftSchool}
                          value={selectedIndexShiftSchool instanceof IndexPath ? shifts[selectedIndexShiftSchool.row] : ''}
                          onSelect={(index) => {
                            setSelectedIndexShiftSchool(index as IndexPath);
                            setFieldValue('school.shift', shifts[(index as IndexPath).row]);
                            if (yearRef.current) {
                              yearRef.current.focus();
                            }
                          }}
                        >
                          {[
                            ...shifts.map((shift, index) => <SelectItem key={`${index}.${shift}`} title={shift} />),
                          ]}
                        </Select>

                        {errors.school?.shift && <Text status="danger">{errors.school?.shift}</Text>}
                      </Layout>
                      <Layout style={styles.containerInput}>
                        <Select
                          disabled={shifts.length === 0}
                          placeholder={shifts.length === 0 ? "Nenhum ano/série cadastrado." : "Selecione um ano/série"}
                          ref={yearRef}
                          status={errors.school?.year ? "danger" : touched.school?.year ? "info" : "basic"}
                          selectedIndex={selectedIndexYearSchool}
                          value={selectedIndexYearSchool instanceof IndexPath ? years[selectedIndexYearSchool.row] : ''}
                          onSelect={(index) => {
                            setSelectedIndexYearSchool(index as IndexPath);
                            setFieldValue('school.year', years[(index as IndexPath).row]);
                            if (phoneRef.current) {
                              phoneRef.current.focus();
                            }
                          }}
                        >
                          {[
                            ...years.map((year, index) => <SelectItem key={`${index}.${year}`} title={year} />),
                          ]}
                        </Select>
                        {errors.school?.year && <Text status="danger">{errors.school?.year}</Text>}
                      </Layout>
                    </Layout>
                  </Layout>
                </Layout>
                <Layout>
                  <Layout style={styles.row}>
                    <Divider style={styles.divider} />
                    <Text category='h5'>Dados do atleta</Text>
                    <Divider style={styles.divider} />
                  </Layout>
                  <Layout style={styles.containerInput}>
                    <Layout style={styles.row}>
                      <Input
                        placeholder="Telefone"
                        ref={phoneRef}
                        style={{ width: '60%' }}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                          if (emailRef.current) {
                            emailRef.current.focus();
                          }
                        }}
                        value={values.contact.phone}
                        onChangeText={handleChange('contact.phone')}
                        status={errors.contact?.phone ? "danger" : touched.contact?.phone ? "info" : "basic"}
                      />
                      <CheckBox
                        checked={values.contact.is_whatsapp}
                        onChange={(value) => setFieldValue('contact.is_whatsapp', value)}
                      >
                        É Whatsapp
                      </CheckBox>
                    </Layout>
                    {errors.contact?.phone && <Text status="danger">{errors.contact?.phone}</Text>}
                  </Layout>
                  <Layout style={styles.containerInput}>
                    <Input
                      placeholder="E-mail"
                      ref={emailRef}
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        if (streetRef.current) {
                          streetRef.current.focus();
                        }
                      }}
                      value={values.contact.email}
                      onChangeText={handleChange('contact.email')}
                      status={errors.contact?.email ? "danger" : touched.contact?.email ? "info" : "basic"}
                    />
                    {errors.contact?.email && <Text status="danger">{errors.contact?.email}</Text>}
                  </Layout>
                  <Layout style={styles.containerInput}>
                    <Input
                      placeholder="Rua"
                      ref={streetRef}
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        if (neighborhoodRef.current) {
                          neighborhoodRef.current.focus();
                        }
                      }}
                      value={values.contact.street}
                      onChangeText={handleChange('contact.street')}
                      status={errors.contact?.street ? "danger" : touched.contact?.street ? "info" : "basic"}
                    />
                    {errors.contact?.street && <Text status="danger">{errors.contact?.street}</Text>}
                  </Layout>
                  <Layout style={styles.containerInput}>
                    <Input
                      placeholder="Bairro"
                      ref={neighborhoodRef}
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        if (numberRef.current) {
                          numberRef.current.focus();
                        }
                      }}
                      value={values.contact.neighborhood}
                      onChangeText={handleChange('contact.neighborhood')}
                      status={errors.contact?.neighborhood ? "danger" : touched.contact?.neighborhood ? "info" : "basic"}
                    />
                    {errors.contact?.neighborhood && <Text status="danger">{errors.contact?.neighborhood}</Text>}
                  </Layout>
                  <Layout style={styles.containerInput}>
                    <Input
                      placeholder="Número"
                      ref={numberRef}
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        if (referencePointRef.current) {
                          referencePointRef.current.focus();
                        }
                      }}
                      value={values.contact.number}
                      onChangeText={handleChange('contact.number')}
                      status={errors.contact?.number ? "danger" : touched.contact?.number ? "info" : "basic"}
                    />
                    {errors.contact?.number && <Text status="danger">{errors.contact?.number}</Text>}
                  </Layout>
                  <Layout style={styles.containerInput}>
                    <Input
                      placeholder="Ponto de referência"
                      ref={referencePointRef}
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        if (cityRef.current) {
                          cityRef.current.focus();
                        }
                      }
                      }
                      value={values.contact.referencePoint}
                      onChangeText={handleChange('contact.referencePoint')}
                      status={errors.contact?.referencePoint ? "danger" : touched.contact?.referencePoint ? "info" : "basic"}
                    />
                    {errors.contact?.referencePoint && <Text status="danger">{errors.contact?.referencePoint}</Text>}
                  </Layout>
                  <Layout style={styles.containerInput}>
                    <Input
                      placeholder="Cidade"
                      ref={cityRef}
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        if (zipCodeRef.current) {
                          zipCodeRef.current.focus();
                        }
                      }}
                      value={values.contact.city}
                      onChangeText={handleChange('contact.city')}
                      status={errors.contact?.city ? "danger" : touched.contact?.city ? "info" : "basic"}
                    />
                    {errors.contact?.city && <Text status="danger">{errors.contact?.city}</Text>}
                  </Layout>
                  <Layout style={styles.containerInput}>
                    <Input
                      placeholder="CEP"
                      ref={zipCodeRef}
                      returnKeyType="done"
                      value={values.contact.zipCode}
                      onChangeText={handleChange('contact.zipCode')}
                      status={errors.contact?.zipCode ? "danger" : touched.contact?.zipCode ? "info" : "basic"}
                    />
                    {errors.contact?.zipCode && <Text status="danger">{errors.contact?.zipCode}</Text>}
                  </Layout>

                </Layout>
                <Layout style={{ ...styles.row, height: 'auto', paddingVertical: 20 }}>
                  <Button 
                    disabled={loading}
                    appearance={loading ? 'outline' : 'filled'}
                    onPress={() => navigation.goBack()} status="danger" style={{ ...styles.button, width: '48%' }}>
                    Cancelar
                  </Button>

                  <Button

disabled={loading}
appearance={loading ? 'outline' : 'filled'}
                    onPress={() => handleSubmit()}
                    style={{ ...styles.button, width: '48%' }}
                  >
                    {loading ? 'Salvando...' : 'Salvar'}
                  </Button>

                </Layout>
              </Layout>

            )}
          </Formik>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
