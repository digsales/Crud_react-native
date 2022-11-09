import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

export default ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  return <Text style={styles.container}>{user.name}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
