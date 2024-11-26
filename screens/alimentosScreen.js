import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const Alimentos = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const alimentos = [
    // Dados dos alimentos
    {
      name: 'Arroz',
      quantity: '5kg',
      image: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/7c44045d2e8577819cb76b2b404902dd.webp?itok=KzeGh6J4',
      water: 'Para produzir 5 kg de arroz, seriam necessários cerca de 12.500 litros de água.',
    },
    {
      name: 'Feijão',
      quantity: '1kg',
      image: 'https://riopreto.gosti.com.br/wp-content/uploads/2021/08/Feijao.jpg',
      water: 'Para produzir 1 kg de feijão, seriam necessários cerca de 1.750 litros de água.',
    },
    {
      name: 'Leite',
      quantity: '1 litro',
      image: 'https://ser.vitao.com.br/wp-content/uploads/2017/07/shutterstock_342000047-1-1-920x535.jpg',
      water: 'Para produzir 1 litro de leite, seriam necessários cerca de 1.000 litros de água.',
    },
    {
      name: 'Queijo',
      quantity: '1kg',
      image: 'https://publisher.diariodocomercio.com.br/wp-content/uploads/2022/05/queijo-minas-artesanal-cultura.jpg',
      water: 'Para produzir 1 quilo de queijo, seriam necessários cerca de 5060 litros de água.',
    },
    {
      name: 'Batata',
      quantity: '1kg',
      image: 'https://www.davo.com.br/ccstore/v1/images/?source=/file/v5565460036042942060/products/prod_7898935261121.imagem1.jpg&height=940&width=940',
      water: 'Para produzir 1 quilo de batata seriam necessários, em média, entre 500 e 1.000 litros de água.',
    },
    {
      name: 'Frango',
      quantity: '1kg',
      image: 'https://www.supermercadosbh.com.br/wp-content/uploads/2021/05/1-Tabua-de-File-de-Peito-de-Frango.png',
      water: 'Para produzir 1 quilo de frango, seriam necessários cerca de 4.300 litros de água',
    },
    {
      name: 'Manteiga',
      quantity: '1kg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVy2722dBzlgGj3ruRftwApNTlnZReV_vgmA&s',
      water: 'Para produzir 1 quilo de manteiga , seriam necessários cerca de 5.500 litros de água ',
    },
    {
      name: 'Carne',
      quantity: '1kg',
      image: 'https://images.tcdn.com.br/img/img_prod/1284052/carne_de_primeira_com_osso_1_0kg_1533_1_4da0ffe1b4d8093b2e63b39eaa377b37.png',
      water: 'Para produzir 1 quilo de carne bovina, seriam necessários cerca de 15.400 litros de água. ja a carne suina seriam necessários cerca de 6.000 litros de água',
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
      <Text style={styles.title}>Qual alimento deseja ver?</Text>

      {/* Card com texto e seta ao lado */}
      <TouchableOpacity style={styles.card} onPress={toggleOptions}>
        <Text style={styles.cardText}>Selecione um alimento</Text>
        <Text style={styles.arrow}>↓</Text> {/* Seta ao lado */}
      </TouchableOpacity>

      {/* Lista de alimentos aparece apenas se 'showOptions' for true */}
      {showOptions && (
        <View style={styles.optionsList}>
          {alimentos.map((food) => (
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

export default Alimentos;
