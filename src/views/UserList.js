import React from "react";
import { Text, StyleSheet } from "react-native";

export default (props) => {
  return <Text style={styles.container}>UserList</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
