import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";


export default function HomeScreen() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/Login");
  };
  const handleSignup = () => {
    router.push("/Signup");
  };

  return (
    <LinearGradient
    colors={['#4cdbb7', '#174b6c']}
    style={styles.container}
    >
      
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')} // Replace with your logo URL or import
          style={styles.logo}
        />
      </View>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 200,
    height: 128,
    backgroundSize:"contain", // Adjust these dimensions to match your design
    marginBottom: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  welcomeText: {
    fontStyle:"italic",
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0E1E23',
    marginBottom: 30,
  },
  button: {
    width: 200,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#0e3a4a',
  },
  buttonText: {
    fontStyle:"italic",
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});