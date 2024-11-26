import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Verifique se o caminho está correto

const ContatoScreen = ({ navigation }) => {
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

// Função para enviar mensagem
const enviarMensagem = async () => {
  try {
    const docRef = await addDoc(collection(db, 'mensagens'), {
      assunto: 'Teste de Conexão',
      mensagem: 'Esta é uma mensagem de teste.',
      dataEnvio: new Date().toISOString(),
    });
    Alert.alert('Sucesso', `Mensagem enviada com ID: ${docRef.id}`);
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    Alert.alert('Erro', 'Não foi possível conectar ao Firestore.');
  }
};


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Entre em contato</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Icon name="envelope" size={28} color="#0074d9" />
          <Text style={styles.cardTitle}>Assunto</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o assunto"
            value={assunto}
            onChangeText={setAssunto}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Mensagem</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Escreva sua mensagem"
            value={mensagem}
            onChangeText={setMensagem}
            multiline
            numberOfLines={5}
          />
        </View>

        <Button title="Enviar" onPress={enviarMensagem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#0074d9',
    elevation: 4,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%',
  },
  card: {
    width: '90%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#0074d9',
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 10,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0074d9',
    marginTop: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default ContatoScreen;
