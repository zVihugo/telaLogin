//Container do stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Importando as páginas
import { SignIn } from "../pages/SignIn";
import { Welcome } from "../pages/Welcome";
//Criando o stack navigator
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="SignIn" 
        component={SignIn} 
        options={{
            headerShown: false
        }}    
    />
    </Stack.Navigator>
  );
}
