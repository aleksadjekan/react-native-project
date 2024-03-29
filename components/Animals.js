import React from "react";
import { View, StyleSheet } from "react-native";
import AnimalGrid from "./AnimalGrid";

const Animals = () => {
  return (
    <View style={styles.container}>
      <AnimalGrid />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
  },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
    overflowY: "auto",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contactInfo: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
  },
});

export default Animals;
