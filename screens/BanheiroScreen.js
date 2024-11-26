import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Banheiro = ({ navigation }) => {
  const [banhosPorDia, setBanhosPorDia] = useState('1'); // Valor inicial como string
  const [duracaoDoBanho, setDuracaoDoBanho] = useState('10'); // Valor inicial como string
  const [consumoSemanalLitros, setConsumoSemanalLitros] = useState(0);
  const [consumoMensalLitros, setConsumoMensalLitros] = useState(0);
  const [custoEstimado, setCustoEstimado] = useState(0);

  const litrosPorMinuto = 8; // Ajustado para 8 litros por minuto conforme a SABESP
  const tarifaSABESP = 6.00; // Valor da tarifa da SABESP por m³ (em R$)

  // Função para realizar os cálculos
  useEffect(() => {
    // Verifica se os valores são válidos
    const numBanhos = parseInt(banhosPorDia);
    const duracao = parseInt(duracaoDoBanho);

    if (isNaN(numBanhos) || isNaN(duracao)) return; // Se não forem números válidos, não faz nada

    // Cálculo do consumo semanal e mensal
    const litrosSemanais = numBanhos * duracao * litrosPorMinuto; // Consumo semanal em litros
    const litrosMensais = litrosSemanais * 4; // Cálculo mensal (aproximadamente 4 semanas no mês)

    // Cálculo do custo estimado (conversão de litros para m³)
    const metrosCubicosMensais = litrosMensais / 1000; // Convertendo litros para m³
    const custo = metrosCubicosMensais * tarifaSABESP; // Cálculo do custo mensal

    setConsumoSemanalLitros(litrosSemanais);
    setConsumoMensalLitros(litrosMensais);
    setCustoEstimado(custo);
  }, [banhosPorDia, duracaoDoBanho]);

  return (
    <View style={styles.container}>
      {/* Título e subtítulo */}
      <Text style={styles.title}>Bem-vindo ao Banheiro!</Text>
      <Text style={styles.subtitle}>Total per capita da habitação</Text>

      {/* Input para número de banhos */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Número de Banhos por Dia:</Text>
        <TextInput
          style={styles.input}
          value={banhosPorDia}
          onChangeText={setBanhosPorDia}
          keyboardType="numeric"
        />
      </View>

      {/* Input para duração do banho */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Duração do Banho (em minutos):</Text>
        <TextInput
          style={styles.input}
          value={duracaoDoBanho}
          onChangeText={setDuracaoDoBanho}
          keyboardType="numeric"
        />
      </View>

      {/* Card de Consumo Semanal */}
      <View style={styles.card}>
        <Text style={styles.cardText}>{consumoSemanalLitros.toFixed(2)} L / por Semana</Text>
      </View>

      {/* Card de Consumo Mensal */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo: {consumoMensalLitros.toFixed(2)} L/mês</Text>
      </View>

      {/* Card de Custo Estimado */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Custo Estimado: R$ {custoEstimado.toFixed(2)}</Text>
      </View>

      {/* Botão de navegação para a próxima tela, por exemplo, Pia */}
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Pia')}>
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

export default Banheiro;
