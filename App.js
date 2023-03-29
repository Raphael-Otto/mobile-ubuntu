import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const livros = [
    {
      capa: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia16043/caracteristicas-cavalos-saudaveis-artigos-cursos-cpt.jpg",
      titulo: 'Cavalo Marrom',
      preco: 7999.99
    },
    {
      capa: "https://s2.glbimg.com/QafpiG_y2vBBKRPnpQKNNAorLFI=/0x0:620x726/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2013/03/08/cavalozuao1.jpg",
      titulo: 'Cavalo Engraçado',
      preco: 10999.99
    },
    {
      capa: "https://www.comprerural.com/wp-content/uploads/2018/06/8e4259d783349ecc814dfbe4a5207e78.jpg",
      titulo: 'Cavalo Peludo',
      preco: 15999.99
    },
    {
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Cavalo_Nordestino_Maniva.jpg/640px-Cavalo_Nordestino_Maniva.jpg",
      titulo: 'Cavalo Nordestino',
      preco: 7999.99
    },
    {
      capa: "https://www.montarumnegocio.com/wp-content/uploads/2021/05/criacao-de-cavalos.jpg",
      titulo: 'Cavalo Caramelo',
      preco: 8999.00
    },
    {
      capa: "https://classic.exame.com/wp-content/uploads/2017/06/2017-06-15-transformando-cavalos-em-unicornios.png?w=980",
      titulo: 'Cavalo Unicórnio',
      preco: 17999.99
    },
    {
      capa: "https://imagens-cdn.canalrural.com.br/2018/06/1525016748330.jpg",
      titulo: 'Cavalo Preto',
      preco: 12999.99
    },
    {
      capa: "https://i0.wp.com/agronews.tv.br/wp-content/uploads/2022/03/cavalo-br-1024x664-1.jpg?resize=355%2C230&ssl=1",
      titulo: 'Cavalo Branco',
      preco: 11999.99
    },
  ]


  const [liked, setLiked] = useState(false);

  const handlePress = () => {
    setLiked(!liked);
  };
  
function Card(props) {
    return (
      <View style={styles.card}>
        <Image style={{ 
          resizeMode: 'cover', 
          height: 200, 
          borderTopLeftRadius: 10, 
          borderTopRightRadius: 10,
          }} source={{uri:props.livro.capa}} />
        <Text style={{ paddingLeft: 5, paddingTop: 5 }}> {props.livro.titulo} </Text>
        <Text style={{ paddingLeft: 5, paddingTop: 5 }}> R$ {props.livro.preco} </Text>
        <TouchableOpacity style={styles.curtidas}
          onPress={handlePress}>
            {liked ? (
              <Ionicons name="heart" size={30} color="red" />
            ) : (
              <Ionicons name="heart-outline" size={30} color="black" />
            )}
        </TouchableOpacity>
      </View>
    )
  }
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{fontSize: 30, fontWeight: 'bold', paddingBottom: 20,}}>Cavalos </Text>
        <View style={styles.conteudo}>
          <View style={styles.conjunto_cards}>
            {livros.map((livro) => (
              <Card livro={livro} /> 
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 0,
    backgroundColor: '#FFF',
  },
  conteudo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ecf0f1',
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  conjunto_cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: "100%",
  },
  card: {
    width: '45%',
    height: 300,
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity:  0.19,
    shadowRadius: 5.62,
    elevation: 6
  },
  curtidas: {
    marginTop: 10,
    alignItems: 'center',
  }
});