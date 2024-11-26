import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Descarga = () => {
  const [descargasPorDia, setDescargasPorDia] = useState('0'); // Valor inicial como string
  const [consumoDiario, setConsumoDiario] = useState(0);
  const [consumoMensal, setConsumoMensal] = useState(0);
  const [custoMensal, setCustoMensal] = useState(0);

  const litrosPorDescarga = 9; // Volume médio por descarga em litros
  const tarifaSABESP = 6.00; // Valor da tarifa da SABESP por m³ (em R$)

  const navigation = useNavigation();
  const route = useRoute();

  // Pegando os valores de Pia e Banho do route.params
  const { usosPia = 0, banhoValue = 0 } = route.params || {}; // Valores padrão para evitar erros

  // Função para realizar os cálculos
  useEffect(() => {
    const descargas = parseInt(descargasPorDia);

    if (isNaN(descargas)) return; // Verifica se o valor é válido

    // Cálculo do consumo diário e mensal
    const consumoDiario = descargas * litrosPorDescarga; // Consumo diário em litros
    const consumoMensal = consumoDiario * 30; // Cálculo mensal (30 dias)

    // Cálculo do custo estimado (conversão de litros para m³)
    const consumoEmM3 = consumoMensal / 1000; // Convertendo litros para m³
    let custo = 0;

    if (consumoEmM3 <= 10) {
      custo = consumoEmM3 * 3.50; // Até 10m³, tarifa de R$ 3,50/m³
    } else if (consumoEmM3 <= 20) {
      custo = consumoEmM3 * 4.50; // De 11 a 20m³, tarifa de R$ 4,50/m³
    } else {
      custo = consumoEmM3 * 5.00; // Acima de 20m³, tarifa de R$ 5,00/m³
    }

    setConsumoDiario(consumoDiario);
    setConsumoMensal(consumoMensal);
    setCustoMensal(custo);
  }, [descargasPorDia]);

  return (
    <View style={styles.container}>
      {/* Título e subtítulo */}
      <Text style={styles.title}>Bem-vindo à Descarga!</Text>
      <Text style={styles.subtitle}>Total per capita da habitação</Text>

      {/* Input para número de descargas */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Número de Descargas por Dia:</Text>
        <TextInput
          style={styles.input}
          value={descargasPorDia}
          onChangeText={setDescargasPorDia}
          keyboardType="numeric"
        />
      </View>

      {/* Card de Consumo Diário */}
      <View style={styles.card}>
        <Text style={styles.cardText}>{consumoDiario.toFixed(2)} L / por Dia</Text>
      </View>

      {/* Card de Consumo Mensal */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo: {consumoMensal.toFixed(2)} L / mês</Text>
      </View>

      {/* Card de Custo Estimado */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Custo Estimado: R$ {custoMensal.toFixed(2)}</Text>
      </View>

      {/* Botão Próximo */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() =>
          navigation.navigate('FinalBanheiro', { banhoValue, usosPia, descargasPorDia }) // Passando valores
        }
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

export default Descarga;
