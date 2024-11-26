import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FinalCozinha = ({ route, navigation }) => {
  // Recebendo os valores passados da tela anterior
  const { CozinhaValue, usoValue, consumoMensal, custoEstimado } = route.params || {};

  // Definindo o consumo diário e mensal com base nos valores passados (em caso de algum valor não ser passado, são calculados aqui)
  const litrosPorLavagem = 10; // Litros por lavagem de louça
  const litrosPorMinuto = 0.08; // Litros por minuto de torneira aberta
  const consumoDiario = ((CozinhaValue * litrosPorLavagem) + (usoValue * litrosPorMinuto)); // Consumo diário
  const consumoMensalCalculado = (consumoDiario * 30).toFixed(2); // Consumo mensal

  // Se o consumo mensal ou custo não forem passados, use os calculados
  const consumoMensalFinal = consumoMensal || consumoMensalCalculado;
  const custoEstimadoFinal = custoEstimado || (consumoMensalFinal / 1000 * 6).toFixed(2); // Cálculo do custo com base na tarifa SABESP

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo da Cozinha</Text>
      <Text style={styles.subtitle}>Consumo e dicas para economizar</Text>

      {/* Card de Consumo Mensal */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo Mensal: {consumoMensalFinal} L/mês</Text>
      </View>

      {/* Card de Custo Estimado */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Custo Estimado: R$ {custoEstimadoFinal}</Text>
      </View>

      {/* Dicas de economia */}
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Dicas para economizar:</Text>
        <View style={styles.tips}>
          <Text style={styles.tipText}>1. Lave a louça com água fria sempre que possível.</Text>
          <Text style={styles.tipText}>2. Evite deixar a torneira aberta enquanto ensaboa a louça.</Text>
          <Text style={styles.tipText}>3. Se possível, use a máquina de lavar louça de maneira eficiente (carregue-a completamente antes de usar).</Text>
          <Text style={styles.tipText}>4. Reutilize a água da lavagem para regar plantas ou outras finalidades.</Text>
        </View>
      </View>

      {/* Botão "Voltar para Home" */}
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
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
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
  // Estilos de dicas
  tipsContainer: {
    width: '80%',
    marginVertical: 20,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  tips: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  tipText: {
    fontSize: 16,
    marginBottom: 5,
  },
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

export default FinalCozinha;
