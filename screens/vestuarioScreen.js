import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const Vestuario = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const Vestuario = [
    // Dados de vestuario
    {
      name: 'Calça Jeans',
      quantity: '1 peça',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtvXljSarnhOFpHgvxsf78TthZXpThNVdTw&s',
      water: 'Para produzir 1 peça de calça jeans, seriam necessários cerca de 5.196 litros litros de água.',
    },
    {
      name: 'Camisa',
      quantity: '1 peça',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibfJQQUH33xmXPFuD3L98E5EaXS2ZDumYoA&s',
      water: 'Para produzir 1 peça de camiseta de algodão, seriam necessários cerca de 2.700 litros de água.',
    },
    {
      name: 'Tênis',
      quantity: '1 par',
      image: 'https://images.tcdn.com.br/img/img_prod/703344/tenis_qix_90s_preto_branco_0001_6064_1_9254c380208ba354a6e06396e498b37f.jpg',
      water: 'Para produzir 1 par de tênis, seriam necessários cerca de 8.547 litros de água.',
    },
    
  ];

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelectAlimento = (food) => {
    setSelectedFood(food);
    setShowOptions(false);  // Oculta a lista de opções após selecionar um alimento
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Qual vestuario deseja ver?</Text>

      {/* Card com texto e seta ao lado */}
      <TouchableOpacity style={styles.card} onPress={toggleOptions}>
        <Text style={styles.cardText}>Selecione um vestuario</Text>
        <Text style={styles.arrow}>↓</Text> {/* Seta ao lado */}
      </TouchableOpacity>

      {/* Lista de Vestuario aparece apenas se 'showOptions' for true */}
      {showOptions && (
        <View style={styles.optionsList}>
          {Vestuario.map((food) => (
            <TouchableOpacity
              key={food.name}
              style={styles.optionCard}
              onPress={() => handleSelectAlimento(food)}
            >
              <Text style={styles.option}>{food.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Exibe os detalhes do alimento selecionado */}
      {selectedFood && (
        <View style={styles.detailsContainer}>
          <Text style={styles.foodName}>{selectedFood.name}</Text>
          <Text style={styles.foodQuantity}>Quantidade: {selectedFood.quantity}</Text>

          {/* Exibindo a imagem do alimento */}
          <Image source={{ uri: selectedFood.image }} style={styles.foodImage} />

          {/* Quantidade de água */}
          <Text style={styles.foodWater}>Água necessária: {selectedFood.water}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,  // Para o conteúdo crescer se necessário
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 20,
    color: '#007BFF',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: '#007BFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    color: '#007BFF',
  },
  arrow: {
    fontSize: 20,
    color: '#007BFF',
  },
  optionsList: {
    marginTop: 20,
    width: '80%',
  },
  optionCard: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    fontSize: 16,
    color: '#007BFF',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#007BFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
  },
  foodName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
  },
  foodQuantity: {
    fontSize: 18,
    color: '#007BFF',
    marginBottom: 10,
  },
  foodImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 8,
  },
  foodWater: {
    fontSize: 16,
    color: '#007BFF',
    textAlign: 'center',
  },
});

export default Vestuario;
