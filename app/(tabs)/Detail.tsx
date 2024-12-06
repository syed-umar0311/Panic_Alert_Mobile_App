import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { useRouter } from "expo-router";

export default function Detail() {
  
  
  const router = useRouter();
  const handleLogin = () => {
   router.push("/Home")
   
  };
  const handleback=()=>{
    router.push("/Initail")
  }
  return (
    <LinearGradient
      colors={['#4cdbb7', '#174b6c']}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Initail Setup</Text>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Emergency Contacts</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Add contacts from phone /manually enter"
          placeholderTextColor="#999"
        />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Personal Information</Text>
        </View>
        
        <TextInput
          style={styles.input}
         
          secureTextEntry
          placeholder="Full Name"
          placeholderTextColor="#999"
        />
         <TextInput
          style={styles.input}
         
          secureTextEntry
          placeholder="Address"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.cancelButton} onPress={handleback}>
          <Text style={styles.cancelText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginText} >Submit</Text>
        </TouchableOpacity>
             </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor:"transparent",
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
   
    shadowRadius: 10,
     },
  title: {
//     fontfamily: Lato,
// font-size: 38px,
// font-style: italic,
// font-weight: 800,
// line-height: 45.6px,
// text-align: left,
fontFamily:"lato", 
    fontSize: 38,
    fontStyle:"italic",
    fontWeight: 800,
    textAlign: "left",
    color: '#000',
    marginBottom: 50,
  },
  headerContainer: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  headerText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: '#000',
  },
  cancelButton: {
    backgroundColor: '#a2d5f2',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  cancelText: {
    color: '#000',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  resetText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
