import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/pages/LoginScreen";
import MainScreen from "./app/pages/MainScreen";
import MyHeader from "./app/components/Headers/MyHeader";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#e4b062",
          },
        }}
      >
        <Stack.Screen
          options={{ headerTitle: () => <MyHeader /> }}
          name="LoginPage"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerTitle: () => <MyHeader /> }}
          name="MainPage"
          component={MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
