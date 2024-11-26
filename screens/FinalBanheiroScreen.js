import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FinalBanheiro = ({ route, navigation }) => {
  // Recebendo os valores das telas anteriores (com valores padrão de 0 caso não sejam passados)
  const { banhoValue = 0, usosPia = 0, descargaValue = 0 } = route.params || {}; // Valores padrão 0

  const litrosPorBanho = 10; // Litros por banho
  const litrosPorUsoPia = 5; // Litros por uso da pia
  const litrosPorDescarga = 9; // Litros por descarga

  // Tarifas por litro (em R$)
  const tarifaBanho = 0.02; // Custo por litro de banho
  const tarifaPia = 0.02; // Custo por litro de pia
  const tarifaDescarga = 0.02; // Custo por litro de descarga

  // Cálculo do consumo mensal baseado no número de banhos, usos da pia e descargas
  const consumoBanho = (banhoValue * litrosPorBanho * 30).toFixed(2); // Consumo mensal de banhos
  const consumoPia = (usosPia * litrosPorUsoPia * 30).toFixed(2); // Consumo mensal da pia
  const consumoDescarga = (descargaValue * litrosPorDescarga * 30).toFixed(2); // Consumo mensal de descargas

  // Calculando o custo de cada atividade
  const custoBanho = (consumoBanho * tarifaBanho).toFixed(2); // Custo de banho
  const custoPia = (consumoPia * tarifaPia).toFixed(2); // Custo de pia
  const custoDescarga = (consumoDescarga * tarifaDescarga).toFixed(2); // Custo de descarga

  // Calculando o custo total estimado
  const custoTotalEstimado = (parseFloat(custoBanho) + parseFloat(custoPia) + parseFloat(custoDescarga)).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo do Consumo no Banheiro</Text>

      {/* Exibindo o consumo de banho */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo Banho: {consumoBanho} L/mês</Text>
      </View>

      {/* Exibindo o consumo da pia */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo Pia: {consumoPia} L/mês</Text>
      </View>

      {/* Exibindo o consumo da descarga */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo Descarga: {consumoDescarga} L/mês</Text>
      </View>

      {/* Exibindo o consumo total */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo Total: {parseFloat(consumoBanho) + parseFloat(consumoPia) + parseFloat(consumoDescarga)} L/mês</Text>
      </View>

      {/* Exibindo o custo total estimado */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Custo Estimado: R$ {custoTotalEstimado}</Text>
      </View>

      {/* Botão para voltar para a Home */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Home')} // Navega para a tela 'Home'
      >
        <Text style={styles.nextButtonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: '#007BFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
    width: '80%',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
  },
  // Estilos de botão
  nextButton: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#2196F3',
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FinalBanheiro;
