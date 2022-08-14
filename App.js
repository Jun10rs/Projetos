import { SafeAreaView, Text, StyleSheet, StatusBar, ScrollView, } from "react-native";

import Contato from "./Contatos";

export default function App (){

  const contatos = [
    {
      id: 1,
      name: 'Baby Yoda',
      contact: '+55 47 98860-1010',
      Image: "./assets/babyoda.jpg"
    },
    {
      id: 2,
      name: 'Bob Esponja',
      contact: '+55 47 98860-1010',
      Image: "./assets/bobesponja.png"
    },
    {
      id: 3,
      name: 'Capitão América',
      contact: '+55 47 98860-1010',
      Image: "./assets/capitaoamerica"
    },
    {
      id: 4,
      name: 'Dead Pool',
      contact: '+55 47 98860-1010',
      Image: "./assets/deadpool.png"
    },
    {
      id: 5,
      name: 'Dog loko',
      contact: '+55 47 98860-1010',
      Image: "./assets/dogalho.jpeg"
    },
    {
      id: 6,
      name: 'Groot',
      contact: '+55 47 98860-1010',
      Image: "./assets/groot.png"
    },
    {
      id: 7,
      name: 'Hagrid',
      contact: '+55 47 98860-1010',
      Image: "./assets/hagrid.jpg"
    },
    {
      id: 8,
      name: 'Patrick',
      contact: '+55 47 98860-1010',
      Image: "./assets/patrick.png"
    },
    {
      id: 9,
      name: 'Lula Molusco',
      contact: '+55 47 98860-1010',
      Image: "./assets/lulamolusco.png"
    },
    {
      id: 10,
      name: 'Lord Valdemort',
      contact: '+55 47 98860-1010',
      Image: "./assets/valdemort.jpg"
    },
  ]


  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style= 'auto' backgroundColor="red" />
    
        <Text style={styles.title}>Meus contatos</Text>
        
        <ScrollView>
        {
          contatos.map((contato) => (<Contato contato={contato} />))
        }
        
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  app: {
    backgroundColor: '#4682B4',
    flex: 1,
  },

  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  },
});