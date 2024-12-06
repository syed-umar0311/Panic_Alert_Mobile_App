import React from 'react';
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

export default function Signup() {

    const router = useRouter();
  
  const handlepass =()=>{
    router.push("/OtpVerification")
  }
  const handleback =()=>{
    router.push("/")
  }

  return (
    <LinearGradient colors={['#4cdbb7', '#174b6c']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Signup</Text>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Personal Information</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="ID"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleback}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handlepass}

        >
          <Text style={styles.loginText} >Signup</Text>
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
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    shadowRadius: 10,
  },
  title: {
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
});
