// screens/AguaVirtual.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AguaVirtual = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Texto de boas-vindas */}
      <Text style={styles.welcomeText}>Bem-vindo à Água Virtual!</Text>

      {/* Subtítulo */}
      <Text style={styles.subTitle}>Escolha uma das opções abaixo para ver sua água virtual:</Text>

      {/* Cards dispostos um embaixo do outro e centralizados */}
      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Alimentos')}  // Navegação para a tela 'Alimentos'
        >
          <Text style={styles.cardText}>Alimentos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Vestuario')}  // Navegação para a tela 'Vestuário'
        >
          <Text style={styles.cardText}>Vestuário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Acessorio')}  // Navegação para a tela 'Acessórios e equipamentos'
        >
          <Text style={styles.cardText}>Acessórios e equipamentos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Centraliza os itens verticalmente
    alignItems: 'center',      // Centraliza os itens horizontalmente
    backgroundColor: '#e0f7fa',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: '#007BFF',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  cardsContainer: {
    alignItems: 'center',  // Centraliza os cards horizontalmente
    justifyContent: 'center',  // Mantém os cards centralizados verticalmente no seu próprio espaço
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,  // Espaço entre os cards
    borderRadius: 12,
    shadowColor: '#007BFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
    width: '80%',  // Ajuste de largura
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});

export default AguaVirtual;
