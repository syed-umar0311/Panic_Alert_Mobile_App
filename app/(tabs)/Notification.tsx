import React from "react";
import {
    Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Notification() {
  const router = useRouter();
  const handleback=()=>{
    router.push("/Home")
  }
  return (
    <LinearGradient colors={["#4cdbb7", "#174b6c"]} style={styles.container}>
      <View style={styles.top}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Icon name="home" size={45} color="#00bcd4" />
          </View>
          <Text style={styles.title}>NOTIFICATION</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.titles}>“Customize alert preferences”</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.btntab}>
      <Text style={styles.back} onPress={handleback}>Back</Text>
      <LinearGradient
      colors={["#0F7560", "#072B48"]} // Define gradient colors
      style={styles.next}
    >
      <Text style={styles.next}>Next</Text>
    </LinearGradient>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#0c1a23",
    alignItems: "center",
  },
  top: {
    marginBottom:0,
    padding: 30,
  },
  header: {
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 80,
    paddingHorizontal: 20,
    paddingVertical: 0,
    backgroundColor: "#083042",
    margin:0
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontStyle: "italic",
    flex: 2,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "transparent",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    alignItems: "center",

    shadowRadius: 10,
  },
  titles: {
    textAlignVertical: "center",
        width: 280,
    height: 40,
    
    fontFamily: "lato",
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: 500,
    textAlign: "center",
    color: "black",
    marginBottom: 10,
  },
  input: {
    height: 400,
    width: "130%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: "#000",
    textAlignVertical: "top",
  },
  btntab:{
    padding:30,
    width:"100%",
    height:60,
    display:"flex",
    alignItems:"center",
    justifyContent:"space-evenly",
flexDirection:"row"

  },
  back:{
    textAlign:"center",
    textAlignVertical:"center",
    borderRadius:20,
    width:130,
    height:50,
    backgroundColor:"#81CFD1",
    color:"black",
    fontSize:14,
    fontWeight:700,
    fontStyle:"italic"

  },
  next:{
    fontSize:14,
    fontWeight:700,
    fontStyle:"italic",
    textAlign:"center",
    textAlignVertical:"center",
    borderRadius:20,
    width:130,
    height:50,
    color:"white"
  }
  
});
