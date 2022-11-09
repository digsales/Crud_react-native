import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./src/views/UserList";
import UserForm from "./src/views/UserForm";
import Ionicon from "@expo/vector-icons/Ionicons";
import { Button } from "@rneui/themed";
import { UsersProvider } from "./src/context/UsersContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({ navigation }) => {
              return {
                title: "Lista de Usuários",
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate("UserForm")}
                    type="clear"
                    icon={<Ionicon name="add" size={30} color="white" />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: "Formulário de Usuários",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </UsersProvider>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "white",
  // headerTitleAlign: "center",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
