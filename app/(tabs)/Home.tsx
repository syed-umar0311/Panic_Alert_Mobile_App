import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  const router = useRouter();
  const handleAlertPage = () => {
    router.push("/Alert");
  };
  const handlesetting = () => {
    router.push("/Setting");
  };
  const handlesafety = ()=>{
    router.push("/SafetyTips")
  }
  const handlenotification = ()=>{
    router.push("/Notification")
  }
  const handleprivacy=()=>{
    router.push("/Privacy")
  }
const handlehelp=()=>{
  router.push("/Help")
}
const handlelog=()=>{
router.push("/Login")
}
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleEmergencyCall = () => {
    Alert.alert("Emergency Call", "Calling emergency services...");
  };

  const handleLocation = () => {
    Alert.alert("Location", "Fetching your location...");
  };

  const handleAlert = () => {
    Alert.alert(
      "Alert Triggered",
      "Hold the button for 3 seconds to activate!"
    );
  };
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <LinearGradient colors={["#4cdbb7", "#174b6c"]} style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleDrawer}>
            <Icon name="menu" size={30} color="#fff" />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Icon name="home" size={80} color="#00bcd4" />
          </View>
          <Text style={styles.title}>Home</Text>
          <TouchableOpacity>
            <Icon name="location-outline" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
        {/* Drawer Menu */}
        {isDrawerOpen && (
          <View style={styles.drawer}>
            <TouchableOpacity style={styles.drawerItem} onPress={handlelog}>
              <Text style={styles.drawerText}>Log Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={handlesafety}>
              <Text style={styles.drawerText}>Safety Tips</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={handlesetting}>
              <Text style={styles.drawerText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={handlehelp}>
              <Text style={styles.drawerText}>Help & Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={handleprivacy}>
              <Text style={styles.drawerText}>Privacy & Security</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={handlenotification}>
              <Text style={styles.drawerText}>Notification</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Buttons Section */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleEmergencyCall}>
            <Icon name="call" size={24} color="#00bcd4" />
            <Text style={styles.buttonText}>Call Emergency</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLocation}>
            <Icon name="location" size={24} color="#00bcd4" />
            <Text style={styles.buttonText}>Location</Text>
          </TouchableOpacity>
        </View>

        {/* Alert Button */}
        <TouchableOpacity
          style={styles.alertButton}
          onPress={handleAlertPage}
          delayLongPress={3000}
          onLongPress={() => Alert.alert("Alert", "Alert Activated!")}
        >
          <Text style={styles.alertText}>ALERT !</Text>
        </TouchableOpacity>

        {/* Instruction */}
        <Text style={styles.instruction}>
          Hold button for <Text style={styles.highlight}>3 seconds</Text> to
          prevent accidental triggers.
        </Text>
      
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 180,
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
    flex: 2,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawer: {
    position: "absolute",
    top: 120,
    left: 0,
    zIndex: 1000,
    width: "50%",
    backgroundColor: "#083042",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  drawerItem: {
    padding: 10,
  },
  drawerText: {
    color: "#fff",
    fontSize: 16,
    fontStyle: "italic",
  },
  buttonContainer: {
    flexDirection: "column",
    marginTop: 40,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    gap: 15,
    width: "80%",
  },
  button: {
    width: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  alertButton: {
    marginTop: 260,
    backgroundColor: "#083042",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  alertText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  instruction: {
    marginTop: 20,
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  highlight: {
    color: "#00bcd4",
    fontWeight: "bold",
  },
});
