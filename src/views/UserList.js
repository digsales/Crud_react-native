import { Avatar, ListItem } from "@rneui/themed";
import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import users from "../data/users";

export default (props) => {
  function getUserItem({ item: user }) {
    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => props.navigation.navigate("UserForm")}
      >
        <Avatar rounded source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "bold" }}>
            {user.name}
          </ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
