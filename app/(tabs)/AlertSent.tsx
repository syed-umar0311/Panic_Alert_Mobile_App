import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";


export default function AlertSent() {
  const router = useRouter();
  const handlefollow = ()=>{
    router.push("/FollowUp")
  }
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Icon name="home" size={45} color="#00bcd4" />
          </View>
          <Text style={styles.title}>ALERT SENT</Text>
        </View>
      </View>
<Text style={styles.text} onPress={handlefollow}>Display real time location sharing status</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    text:{
        textAlign:"center",
        marginTop:150,
        fontSize:16
    },
  main: {
    backgroundColor: "white",
    height:1000
  },
  top: {
    padding: 30,
  },
  header: {
    borderRadius:14,
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
    fontStyle:"italic",
    flex: 2,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
