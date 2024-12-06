import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";


export default function AlertAction() {
  const router = useRouter();
  const handleSent = () => {
    router.push("/AlertSent");
  };
  return (
    <LinearGradient
    colors={['#4cdbb7', '#174b6c']}
    style={styles.container}
  >
    <Text style={styles.header}>ALERT ACTIONS</Text>

    <Text style={styles.subHeader}>
      Requires authentication
    </Text>

    <TextInput
      style={styles.input}
      placeholder="Password"
      placeholderTextColor="#b0b0b0"
    />
    
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sendButton} onPress={handleSent}>
        <Text style={styles.buttonTextsend}>Send</Text>
      </TouchableOpacity>
    </View>

   

    <Text style={styles.footerText}>
        OR
    </Text>

    <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/Finger.png')} // Replace with your logo URL or import
          style={styles.logo}
        />
      </View>
      <Text style={styles.footerText}>
        FingerPrint Scan
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
    logoContainer: {
        alignItems: 'center',
        marginBottom: 10,
      },
      logo: {
        width: 48,
        height: 48,
        backgroundSize:"contain", // Adjust these dimensions to match your design
        marginBottom: 10,
        marginTop:30
      },
      
  });
