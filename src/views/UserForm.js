import React, { useContext, useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import UsersContext from "../context/UsersContext";

export default ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(UsersContext);

  return (
    <View style={styles.form}>
      <View>
        <Text style={styles.titleForm}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(name) => setUser({ ...user, name })}
          placeholder="Informe seu nome"
          value={user.name}
        />
      </View>
      <View>
        <Text style={styles.titleForm}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => setUser({ ...user, email })}
          placeholder="Informe seu email"
          value={user.email}
        />
      </View>
      <View>
        <Text style={styles.titleForm}>URL do Avatar</Text>
        <TextInput
          style={styles.input}
          onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
          placeholder="Informe a URL do seu Avatar"
          value={user.avatarUrl}
        />
      </View>

      <Button
        title="Salvar"
        color={"#f4511e"}
        onPress={() => {
          dispatch({
            type: user.id ? "updateUser" : "createUser",
            payload: user,
          });
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 16,
  },
  titleForm: {
    fontSize: 15,
  },
  input: {
    height: 40,
    borderColor: "#f4511e",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
