import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CalculadoraScreen = ({ navigation }) => {
  const areas = ['Banheiro', 'Cozinha', 'Lavanderia', 'AreaExterna'];

  const handlePress = (area) => {
    navigation.navigate(area);
  };

  return (
    <View style={styles.container}>
      {areas.map((area, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => handlePress(area)}
          accessibilityLabel={`Navigate to ${area}`}
        >
          <Text style={styles.cardText}>{area}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
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
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#007BFF',
    fontWeight: 'bold', // Adicionado para texto em negrito
    fontFamily: 'Cambria', // Altere para o nome da sua fonte, se necessário
  },
});

export default CalculadoraScreen ;
