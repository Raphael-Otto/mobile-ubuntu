import { Image, Text, View, StyleSheet, FlatList } from 'react-native';

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={{ resizeMode: 'stretch', height: 200}} source={{uri:props.livro.capa}} />
      <Text> {props.livro.titulo} </Text>
      <Text> R$ {props.livro.preco} </Text>
    </View>
  )
}

export default function App() {
    const livros = [
      {
        capa: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia16043/caracteristicas-cavalos-saudaveis-artigos-cursos-cpt.jpg",
        titulo: 'Livro 1',
        preco: 25.90
      },
      {
        capa: "https://images.booksense.com/images/460/994/9781788994460.jpg",
        titulo: 'Livro 2',
        preco: 125.90
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
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Livros </Text>
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
    backgroundColor: '#ecf0f1',
  },
  conteudo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ccc',
    paddingTop: 20,
    alignItems: 'center',
    width: '100%'
  },
  card: {
    width: '40%',
    height: 240,
    backgroundColor: '#0d0',
    borderRadius: 10,
    margin: 15,
  }
});