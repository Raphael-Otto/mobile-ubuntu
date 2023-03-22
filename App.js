import { Image, Text, View, StyleSheet, FlatList } from 'react-native';

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={{ 
        resizeMode: 'stretch', 
        height: 200, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity:  0.21,
        shadowRadius: 7.68,
        elevation: 10,
        }} source={{uri:props.livro.capa}} />
      <Text style={{ paddingLeft: 5, paddingTop: 5 }}> {props.livro.titulo} </Text>
      <Text style={{ paddingLeft: 5, paddingTop: 5 }}> R$ {props.livro.preco} </Text>
    </View>
  )
}

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
        capa: "https://images.booksense.com/images/460/994/9781788994460.jpg",
        titulo: 'Livro 3',
        preco: 225.90
      },
      {
        capa: "https://images.booksense.com/images/460/994/9781788994460.jpg",
        titulo: 'Livro 4',
        preco: 325.90
      },
      {
        capa: "https://images.booksense.com/images/460/994/9781788994460.jpg",
        titulo: 'Livro 4',
        preco: 325.90
      },
      {
        capa: "https://images.booksense.com/images/460/994/9781788994460.jpg",
        titulo: 'Livro 4',
        preco: 325.90
      },
      {
        capa: "https://images.booksense.com/images/460/994/9781788994460.jpg",
        titulo: 'Livro 4',
        preco: 325.90
      },
      {
        capa: "https://images.booksense.com/images/460/994/9781788994460.jpg",
        titulo: 'Livro 4',
        preco: 325.90
      },
    ]


  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: 'bold', paddingBottom: 15,}}>Cavalos </Text>
      <View style={styles.conteudo}>
        <FlatList 
          data={livros}
          renderItem={({item}) => <Card livro={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    marginTop: 40,
    backgroundColor: '#ccc',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity:  0.21,
    shadowRadius: 7.68,
    elevation: 10,
  },
  conteudo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ecf0f1',
    paddingTop: 20,
    alignItems: 'center',
    width: '100%'
  },
  card: {
    width: '40%',
    height: 250,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    margin: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity:  0.19,
    shadowRadius: 5.62,
    elevation: 6
  }
});