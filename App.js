import CreateCategory from "./screens/CreateCategory"
import CreateRecipe from "./screens/CreateRecipe"
import Home from "./screens/Home"
const { NavigationContainer } = require("@react-navigation/native")
const { createNativeStackNavigator } = require("@react-navigation/native-stack")

function App() {
  const Stack = createNativeStackNavigator()
  
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{ 
        headerShown: false
       }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="CreateCategory" component={CreateCategory}></Stack.Screen>
        <Stack.Screen name="CreateRecipe" component={CreateRecipe}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App