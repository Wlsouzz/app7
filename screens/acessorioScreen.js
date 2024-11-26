import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const Acessorios = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const Acessorios = [
    // Dados de Acessorios
    {
      name: 'Computador',
      quantity: '1 unidade',
      image: 'https://imgs.extra.com.br/1565608529/1xg.jpg',
      water: 'Para produzir 1 Computador, seriam necessários cerca de 1.500 litros de água.',
    },
    {
      name: 'Folha de Papel A4',
      quantity: '1 unidade',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGSTunotEb0JEhBaa7niCDgLu_UgbmxYRjQ&s',
      water: 'Para produzir 1 unidade de folha de papel A4, seriam necessários cerca de 10 litros de água.',
    },
    {
      name: 'Carro',
      quantity: '1 unidade',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGciRu5wTE397GbAyq4vM1xwKs4-hDd0r8w&s',
      water: 'Para produzir 1 um carro, seriam necessários cerca de 35.000 litros de água.',
    },
    {
      name: 'Celular',
      quantity: '1 unidade',
      image: 'https://meucelular.com/wp-content/uploads/2024/09/loja-de-celular-iphone-e-android-meucelular.webp',
      water: 'Para produzir 1 um celular, seriam necessários cerca de 12.760 litros de água.',
    },
    {
      name: 'Bolsa',
      quantity: '1 unidade',
      image: 'https://cdn.awsli.com.br/600x1000/1122/1122232/produto/109233610/15e2a7c61c.jpg',
      water: 'Para produzir 1 uma bolsa de algodão, seriam necessários cerca de 1.000 litros de água. Já a bolsa de poliester, seriam necessários cerca de 1.500 litros de água',
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
      <Text style={styles.title}>Qual Acessorios deseja ver?</Text>

      {/* Card com texto e seta ao lado */}
      <TouchableOpacity style={styles.card} onPress={toggleOptions}>
        <Text style={styles.cardText}>Selecione um Acessorios</Text>
        <Text style={styles.arrow}>↓</Text> {/* Seta ao lado */}
      </TouchableOpacity>

      {/* Lista de Acessorios aparece apenas se 'showOptions' for true */}
      {showOptions && (
        <View style={styles.optionsList}>
          {Acessorios.map((food) => (
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

export default Acessorios;
