import React, { useContext } from "react";
import { Avatar, Button, ListItem } from "@rneui/themed";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Ionicon from "@expo/vector-icons/Ionicons";
import UsersContext from "../context/UsersContext";

export default (props) => {
  const { state, dispatch } = useContext(UsersContext);

  function confirmUserDeletion(user) {
    Alert.alert("Exluir Usuário", "Deseja mesmo exluir este usuário?", [
      {
        text: "Sim",
        onPress() {
          dispatch({
            type: "deleteUser",
            payload: user,
          });
        },
      },
      {
        text: "Não",
      },
    ]);
  }

  function getActions(user) {
    return (
      <View style={{ flexDirection: "row" }}>
        <Button
          onPress={() => props.navigation.navigate("UserForm", user)}
          type="clear"
          icon={<Ionicon name="pencil" size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Ionicon name="trash" size={25} color="red" />}
        />
      </View>
    );
  }

  function getUserItem({ item: user }) {
    return (
      <ListItem
        key={user.id}
        bottomDivider
        // onPress={() => props.navigation.navigate("UserForm", user)}
      >
        <Avatar rounded source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "bold" }}>
            {user.name}
          </ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content right>{getActions(user)}</ListItem.Content>
      </ListItem>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={state.users}
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
