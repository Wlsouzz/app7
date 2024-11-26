import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FinalAreaExterna = ({ route, navigation }) => {
  // Desestruturação dos parâmetros passados pela tela anterior
  const { consumoMensal = 0, custoEstimado = 0 } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo da Área Externa</Text>
      <Text style={styles.subtitle}>Consumo e dicas para economizar</Text>

      {/* Card de Consumo */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo: {consumoMensal.toFixed(2)} L/mês</Text>
      </View>

      {/* Card de Custo Estimado */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Custo Estimado: R$ {custoEstimado.toFixed(2)}</Text>
      </View>

      {/* Dicas de economia */}
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Dicas para economizar:</Text>
        <View style={styles.tips}>
          <Text style={styles.tipText}>1. Use regadores ao invés de mangueiras.</Text>
          <Text style={styles.tipText}>2. Evite deixar a mangueira ligada por muito tempo.</Text>
          <Text style={styles.tipText}>3. Reutilize a água da chuva, se possível.</Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
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
    textAlign: 'center',
    color: '#333',
  },
  tipsContainer: {
    width: '80%',
    marginVertical: 20,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  tips: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  tipText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  nextButton: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FinalAreaExterna;
