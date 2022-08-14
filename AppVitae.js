import {
    SafeAreaView,
    Text,
    StatusBar,
    StyleSheet,
    Image,
    ScrollView,
    View,
    Button,
  } from "react-native";
  
  import dogAlho from "./assets/dogalho.jpeg";
  
  export default function App() {
  
    function mostrarOla (){
      alert("Olá DeviHouse jr");
    }
    return (
      <SafeAreaView style={styles.app}>
        <Button
          title="aperte"
          color="red"
          onPress={mostrarOla}
        />
  
        <ScrollView showsVertiScrollIndicator={false}>
          <StatusBar backgroundColor="#006E00" />
  
          <Text style={styles.title}>Vitae</Text>
  
          <Image style={styles.profile} source={dogAlho} />
  
          <Text style={styles.myName}>Junior Silva</Text>
  
          <Text style={styles.myLife}> - Minha Historia</Text>
  
          <Text
            style={styles.descriptionMyLife}
            selectable={true}
            selectionColor="#A9A9A9"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop{" "}
          </Text>
          <Text style={styles.descriptionMyLife}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktopp
          </Text>
          <Text style={styles.descriptionMyLife}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop{" "}
          </Text>
          <Text
            style={styles.descriptionMyLife}
            selectionColor="#A9A9A9"
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            cdjkjdsvkjdnvndvndcdlksvklddkckldnlkdn kndjsn lelknkldnlkdnlkdnnkl
            mdklvmdlkvdlkvnklt sheets containing Lorem Ipsum passages, and more
            recently with desktop p
          </Text>
          <Text style={styles.myLife}> - Minhas Habilidades</Text>
          <ScrollView horizontal={true}>
            <Image
              style={styles.myPhotos}
              source={{
                uri: "https://fiodevida.com/wp-content/uploads/2021/05/css3-57b597e85f9b58b5c2b338de.png",
              }}
            />
            <Image
              style={styles.myPhotos}
              source={{
                uri: "https://fiodevida.com/wp-content/uploads/2021/05/css3-57b597e85f9b58b5c2b338de.png",
              }}
            />
            <Image
              style={styles.myPhotos}
              source={{
                uri: "https://fiodevida.com/wp-content/uploads/2021/05/css3-57b597e85f9b58b5c2b338de.png",
              }}
            />
            <Image
              style={styles.myPhotos}
              source={{
                uri: "https://fiodevida.com/wp-content/uploads/2021/05/css3-57b597e85f9b58b5c2b338de.png",
              }}
            />
          </ScrollView>
  
          <Text style={styles.myLife}> - Empresas que desejo trabalhar</Text>
  
          <View style={styles.company}>
            <Image
              style={styles.photosCard}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
              }}
            />
            <View>
              <Text style={styles.descriptionMyLife}> - EDP</Text>
              <Text style={styles.descriptionMyLife} dataDetectorType="link">
                https://www.edp.com.br/
              </Text>
            </View>
          </View>
  
          <View style={styles.company}>
            <Image
              style={styles.photosCard}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
              }}
            />
            <View>
              <Text style={styles.descriptionMyLife}> - EDP</Text>
              <Text style={styles.descriptionMyLife} dataDetectorType="link">
                https://www.edp.com.br/
              </Text>
            </View>
          </View>
          <View style={styles.company}>
            <Image
              style={styles.photosCard}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
              }}
            />
            <View>
              <Text style={styles.descriptionMyLife}> - EDP</Text>
              <Text style={styles.descriptionMyLife} dataDetectorType="link">
                https://www.edp.com.br/
              </Text>
            </View>
          </View>
          <View style={styles.company}>
            <Image
              style={styles.photosCard}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
              }}
            />
            <View>
              <Text style={styles.descriptionMyLife}> - EDP</Text>
              <Text style={styles.descriptionMyLife} dataDetectorType="link">
                https://www.edp.com.br/
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    app: {
      backgroundColor: "#2F4F4F",
      flex: 1,
    },
    title: {
      color: "red",
      fontSize: 30,
      alignSelf: "center",
      marginVertical: 20,
      fontWeight: "bold",
    },
    profile: {
      width: 100,
      height: 100,
      borderRadius: 50,
      alignSelf: "center",
      marginVertical: 20,
    },
    myName: {
      fontSize: 18,
      color: "#FFFF00",
      textAlign: "center",
      margin: 15,
    },
    myLife: {
      color: "#999",
      fontSize: 18,
      marginLeft: 20,
      marginTop: 20,
    },
    descriptionMyLife: {
      color: "white",
      textAlign: "justify",
      marginLeft: 15,
      marginRight: 15,
    },
    myPhotos: {
      width: 60,
      height: 60,
      borderRadius: 50,
      margin: 15,
    },
  
    photosCard: {
      width: 50,
      height: 50,
      borderRadius: 50,
    },
  
    company: {
      backgroundColor: "#006400",
      flexDirection: "row",
      borderColor: "#7CFC00",
      borderWidth: 3,
      width: "90%",
      alignSelf: "center",
      padding: 10,
      marginVertical: 10,
      borderRadius: 10,
    },
  });
  