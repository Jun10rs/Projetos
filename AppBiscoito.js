import {
    SafeAreaView,
    Image,
    ImageBackground,
    StyleSheet,
    StatusBar,
    Button,
  } from "react-native";
  
  import background from "./assets/fundo.png";
  import biscoito from "./assets/biscuit.png";
  
  export default function App() {
  
    const minhasFrases = [
      'Olá pequeno Padawan - A vida trará coisas boas se tiver paciência', 
      'Olá pequeno Padawan - Não compense na ira o que lhe falta na razão', 
      'Olá pequeno Padawan - A maior de todas as torres começa no solo', 
      'Olá pequeno Padawan - Siga os bons e aprenda com eles',
      'Olá pequeno Padawan - A sorte favorece a mente bem preparada',
      'Olá pequeno Padawan - Você é do tamanho do seu sonho',
      'Olá pequeno Padawan - Nós somos o que pensamos',
      'Olá pequeno Padawan - A vontade das pessoas é a melhor das leis',
      'Olá pequeno Padawan - Acredite em milagres, mas não dependa deles',
      'Olá pequeno Padawan - Você sempre será a sua melhor companhia!',
  ]
    
    function quebrarBiscoito() {
      const numeroAleatorio = Math.random() * 10
      const numeroInteiro = Math.floor(numeroAleatorio)
  
      alert (minhasFrases[numeroInteiro])
    }
  
    return (
      <SafeAreaView>
        <ImageBackground source={background} style={styles.imageApp}>
          <StatusBar backgroundColor="#e8ad86" />
  
          <Image source={biscoito} style={styles.logo} />
          <Button
            title="Quebrar biscoito"
            color="#A52A2A"
            onPress={quebrarBiscoito}
          />
  
        </ImageBackground>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    imageApp: {
      width: "100%",
      height: "100%",
      alignItems:'center',
      justifyContent: 'center'
    },
    logo: {
      width: 150,
      height: 150,
    },
  });
  