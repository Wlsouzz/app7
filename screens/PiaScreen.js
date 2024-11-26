import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Pia = ({ navigation }) => {
  const [usosPia, setUsosPia] = useState('1'); // Valor inicial como string
  const [duracaoUso, setDuracaoUso] = useState('10'); // Valor inicial como string
  const [consumoDiario, setConsumoDiario] = useState(0);
  const [consumoMensal, setConsumoMensal] = useState(0);
  const [custoEstimado, setCustoEstimado] = useState(0);

  const litrosPorUso = 5; // Quantidade de água em litros por uso de pia
  const tarifaSABESP = 6.00; // Valor da tarifa da SABESP por m³ (em R$)

  // Função para realizar os cálculos
  useEffect(() => {
    // Verifica se os valores são válidos
    const numUsos = parseInt(usosPia);
    const duracao = parseInt(duracaoUso);

    if (isNaN(numUsos) || isNaN(duracao)) return; // Se não forem números válidos, não faz nada

    // Cálculo do consumo diário e mensal
    const consumoDiario = numUsos * litrosPorUso; // Consumo diário em litros
    const consumoMensal = consumoDiario * 30; // Cálculo mensal (aproximadamente 30 dias no mês)

    // Cálculo do custo estimado (conversão de litros para m³)
    const metrosCubicosMensais = consumoMensal / 1000; // Convertendo litros para m³
    const custo = metrosCubicosMensais * tarifaSABESP; // Cálculo do custo mensal

    setConsumoDiario(consumoDiario);
    setConsumoMensal(consumoMensal);
    setCustoEstimado(custo);
  }, [usosPia, duracaoUso]);

  return (
    <View style={styles.container}>
      {/* Título e subtítulo */}
      <Text style={styles.title}>Bem-vindo ao Lavatório!</Text>
      <Text style={styles.subtitle}>Total per capita da habitação</Text>

      {/* Input para usos da pia */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Usos da Pia por Dia:</Text>
        <TextInput
          style={styles.input}
          value={usosPia}
          onChangeText={setUsosPia}
          keyboardType="numeric"
        />
      </View>

      {/* Input para duração de cada uso */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Duração de cada Uso (em segundos):</Text>
        <TextInput
          style={styles.input}
          value={duracaoUso}
          onChangeText={setDuracaoUso}
          keyboardType="numeric"
        />
      </View>

      {/* Card de Consumo Diário */}
      <View style={styles.card}>
        <Text style={styles.cardText}>{consumoDiario.toFixed(2)} L / por Dia</Text>
      </View>

      {/* Card de Consumo Mensal */}
      <View style={styles.card}>
        <Text style={styles.cardText}>{consumoMensal.toFixed(2)} L / mês</Text>
      </View>

      {/* Card de Custo Estimado */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Custo Estimado: R$ {custoEstimado.toFixed(2)}</Text>
      </View>

      {/* Botão de navegação para a próxima tela, por exemplo, Banheiro */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Descarga')} // Navegação para a próxima tela
      >
        <Text style={styles.nextButtonText}>Próximo</Text>
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
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '80%',
    marginVertical: 10,
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    fontSize: 16,
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
  },
  nextButton: {
    padding: 10,
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
  nextButtonText: {
    color: '#2196F3',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Pia;
