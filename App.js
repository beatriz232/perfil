import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import perfil from './assets/WhatsApp Image 2026-02-01 at 15.26.31.jpeg';
import foto1 from './assets/WhatsApp Image 2026-02-01 at 15.26.31 (1).jpeg';
import foto2 from './assets/WhatsApp Image 2026-02-01 at 15.26.32 (1).jpeg';


const { width } = Dimensions.get('window');
const FOTO = width / 3;

export default function App() {
  const [seguindo, setSeguindo] = useState(false);
  const [seguidores, setSeguidores] = useState(120);

  function alternarSeguir() {
    setSeguindo(!seguindo);

    if (!seguindo) {
      setSeguidores(seguidores + 1);
    } else {
      setSeguidores(seguidores - 1);
    }
  }

  const fotos = [foto1, foto2, perfil];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>

      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image source={perfil} style={styles.avatar} />
          <View style={styles.badge} />
        </View>

        <View style={styles.infoContainer}>
          <Info numero={fotos.length} label="Posts" />
          <Info numero={seguidores} label="Seguidores" />
          <Info numero="180" label="Seguindo" />
        </View>
      </View>

      
      <View style={styles.bio}>
        <Text style={styles.nome}>Meu Perfil </Text>
        <Text>Clone Instagram • React Native</Text>
        <Text style={styles.descricao}>Desenvolvedora</Text>
      </View>

      
      <TouchableOpacity
        style={[
          styles.botao,
          { backgroundColor: seguindo ? '#ccc' : '#3897f0' },
        ]}
        onPress={alternarSeguir}
      >
        <Text style={styles.botaoTexto}>
          {seguindo ? 'Seguindo' : 'Seguir'}
        </Text>
      </TouchableOpacity>

      
      <View style={styles.menuIcons}>
        <Ionicons name="grid-outline" size={26} />
        <Ionicons name="person-outline" size={26} />
        <Ionicons name="bookmark-outline" size={26} />
      </View>

    
      <View style={styles.grid}>
        {fotos.map((foto, i) => (
          <Image key={i} source={foto} style={styles.foto} />
        ))}
      </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <Ionicons name="home-outline" size={26} />
        <Ionicons name="search-outline" size={26} />
        <Ionicons name="add-circle-outline" size={30} />
        <Ionicons name="heart-outline" size={26} />
        <Ionicons name="person-outline" size={26} />
      </View>
    </View>
  );
}

function Info({ numero, label }) {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.numero}>{numero}</Text>
      <Text>{label}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },

  avatarContainer: {
    position: 'relative',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  badge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'red',
  },

  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
  },

  infoItem: {
    alignItems: 'center',
  },

  numero: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  bio: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  nome: {
    fontWeight: 'bold',
  },

  botao: {
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 15,
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },

  menuIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  foto: {
    width: FOTO,
    height: FOTO,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
