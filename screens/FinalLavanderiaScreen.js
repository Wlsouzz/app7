import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const FinalLavanderia = ({ route, navigation }) => {
  // Recebe os dados passados pela tela anterior
  const { consumoDiario, consumoMensal, custoEstimado } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo da Lavanderia</Text>
      <Text style={styles.subtitle}>Consumo e dicas para economizar</Text>

      {/* Card de Consumo Mensal */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo mensal: {consumoMensal} L/mês</Text>
      </View>

      {/* Card de Custo Estimado */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Custo Estimado: R$ {custoEstimado}</Text>
      </View>

      {/* Dicas para economizar */}
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Dicas para economizar:</Text>
        <View style={styles.tips}>
          <Text style={styles.tipText}>1. Use o chuveiro por menos tempo.</Text>
          <Text style={styles.tipText}>2. Lave roupas com água fria sempre que possível.</Text>
          <Text style={styles.tipText}>3. Evite lavar roupas pequenas, faça isso em lotes maiores.</Text>
          <Text style={styles.tipText}>4. Se possível, reutilize a água da lavagem para outros usos.</Text>
        </View>
      </View>

      {/* Botão para voltar à Home */}
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')} // Navega para a tela 'Home'
      />
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
});

export default FinalLavanderia;
