import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import CalculadoraScreen from './screens/CalculadoraScreen';
import BanheiroScreen from './screens/BanheiroScreen';
import PiaSreen from './screens/PiaScreen';
import DescargaScreen from './screens/DescargaScreen';
import FinalBanheiroScreen from './screens/FinalBanheiroScreen';
import CozinhaScreen from './screens/CozinhaScreen';
import FinalCozinhaScreen from './screens/FinalCozinhaScreen';
import LavanderiaScreen from './screens/LavanderiaScreen';
import FinalLavanderiaScreen from './screens/FinalLavanderiaScreen';
import AreaExternaScreen from './screens/AreaExternaScreen';
import FinalAreaExternaScreen from './screens/FinalAreaExternaScreen';
import AguaVirtualScreen from './screens/AguaVirtualScreen';
import AlimentosScreen from './screens/alimentosScreen';
import VestuarioScreen from './screens/vestuarioScreen';
import AcessorioScreen from './screens/acessorioScreen';
import ContatoScreen from './screens/ContatoScreen';



// Configurando o Navegador
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Calculadora" component={CalculadoraScreen} />
        <Stack.Screen name="Banheiro" component={BanheiroScreen} /> 
        <Stack.Screen name="Pia" component={PiaSreen} /> 
        <Stack.Screen name="Descarga" component={DescargaScreen}  /> 
        <Stack.Screen name="FinalBanheiro" component={FinalBanheiroScreen} /> 
        <Stack.Screen name="Cozinha" component={CozinhaScreen} /> 
        <Stack.Screen name="FinalCozinha" component={FinalCozinhaScreen} /> 
        <Stack.Screen name="Lavanderia" component={LavanderiaScreen} /> 
        <Stack.Screen name="FinalLavanderia" component={FinalLavanderiaScreen} /> 
        <Stack.Screen name="AreaExterna" component={AreaExternaScreen} /> 
        <Stack.Screen name="FinalAreaExterna" component={FinalAreaExternaScreen} /> 
        <Stack.Screen name="AguaVirtual" component={AguaVirtualScreen} /> 
        <Stack.Screen name="Alimentos" component={AlimentosScreen} /> 
        <Stack.Screen name="Vestuario" component={VestuarioScreen} /> 
        <Stack.Screen name="Acessorio" component={AcessorioScreen} /> 
        <Stack.Screen name="Contato" component={ContatoScreen} />       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
