import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
// import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function FollowUp() {
  //   const router = useRouter();
  //   const handlefollow = ()=>{
  //     router.push("/FollowUp")
  //   }
  return (
    <LinearGradient colors={["#4cdbb7", "#174b6c"]} style={styles.container}>
      <View style={styles.top}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Icon name="home" size={45} color="#00bcd4" />
          </View>
          <Text style={styles.title}>FOLLOW UP</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.titles}>Incident Report</Text>
        <TextInput
          style={styles.input}
          placeholder="To Fill out the detail about the incident."
          placeholderTextColor="#999"
        />
        <Text style={styles.titles}>Feedback</Text>

        <TextInput
          style={styles.inputs}
          secureTextEntry
          placeholder="User feedback on app performance."
          placeholderTextColor="#999"
        />
        <LinearGradient colors={["#0F7560", "#072B48"]} style={styles.loginButton}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Next</Text>
          </TouchableOpacity>
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
    padding: 30,
  },
  header: {
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#083042",
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
    borderRadius: 15,
    width: 240,
    height: 40,
    backgroundColor: "#000",
    fontFamily: "lato",
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: 800,
    textAlign: "center",
    color: "white",
    marginBottom: 20,
  },
  headerContainer: {
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  headerText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  input: {
    height: 170,
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: "#000",
    textAlignVertical: "top",
  },
  inputs: {
    height: 100,
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: "#000",
    textAlignVertical: "top",
  },

  loginButton: {
    height:55,
    borderRadius: 30,
paddingTop:8,    
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
  },
  loginText: {
    textAlign:"center",
    textAlignVertical:"center",
    color: "#fff",
    fontWeight: "bold",
  },
});
