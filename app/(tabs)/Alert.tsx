import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";



export default function Alert() {
    const router = useRouter();
    const handleActions = () => {
      router.push("/AlertActions");
    };
  return (
    <LinearGradient
    colors={['#4cdbb7', '#174b6c']}
    style={styles.container}
  >
    <Text style={styles.header}>ALERT!</Text>

    <Text style={styles.subHeader}>
      Send alert to emergency contacts.
    </Text>

    <TextInput
      style={styles.input}
      placeholder="Contact number"
      placeholderTextColor="#b0b0b0"
    />
     <Text style={styles.subHeader}>
     Share real time location.    </Text>
    <TextInput
      style={styles.input}
      placeholder="Location"
      placeholderTextColor="#b0b0b0"
    />

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sendButton} onPress={handleActions}>
        <Text style={styles.buttonTextsend}>Send</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.callButton}>
      <Text style={styles.callButtonText}>Call Emergency</Text>
    </TouchableOpacity>

    <Text style={styles.footerText}>
      Option to call emergency services automatically.
    </Text>
  </LinearGradient>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 20,
      paddingTop:40,
      borderRadius: 10,
    },
    header: {
        fontStyle:"italic",
        borderRadius:10,
        textAlign:"center",
        textAlignVertical:"center",
    backgroundColor: "#083042",
    width: "100%",
    height: 100,
      fontSize: 32,
      fontWeight: "bold",
      color: "white",
      marginBottom: 60,
      top:0
    },
    subHeader: {
        
      fontSize: 16,
      color: "black",
      marginBottom: 10,
      textAlign: "center",
    },
    input: {
        textAlign:"center",
      width: "80%",
      height: 50,
      borderRadius: 10,
      backgroundColor: "white",
      paddingHorizontal: 15,
      fontSize: 16,
      marginBottom: 15,
      color: "black",
    },
    buttonContainer: {
      flexDirection: "column",
      alignItems:"center",
      justifyContent: "space-between",
      width: "100%",
      gap:20,
      marginBottom: 20,
      height:150
    },
    cancelButton: {
        width:200,
      flex: 1,
      backgroundColor: "#6EC5C5",
      paddingVertical: 15,
      borderRadius: 30,
      alignItems: "center",
      marginRight: 0,
      color:"black"
    },
    sendButton: {
        width:200,
      flex: 1,
      backgroundColor: "#134E5E",
      paddingVertical: 15,
      borderRadius: 30,
      alignItems: "center",
      marginLeft: 0,
    },
    buttonText: {
      color: "black",
      fontSize: 16,
      fontWeight: "bold",
      fontStyle:"italic"
    },
    buttonTextsend: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle:"italic"
      },
    callButton: {
      paddingVertical: 15,
      paddingHorizontal: 50,
      borderRadius: 10,
      marginBottom: 20,
      backgroundColor: "#083042",

    },
    callButtonText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      fontStyle:"italic"
    },
    footerText: {
      fontSize: 14,
      color: "black",
      textAlign: "center",
    },
  });
