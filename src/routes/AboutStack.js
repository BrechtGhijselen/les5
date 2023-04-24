import About from "../screens/About";
import { createStackNavigator } from "@react-navigation/stack";
import { globalStyles } from "../styles/global";
import Header from "../shared/Header";

const Stack = createStackNavigator();

export default AboutStack = () => {
  return (
    <Stack.Navigator screenOptions={globalStyles.screenOptions}>
      <Stack.Screen
        name="About"
        component={About}
        options={({navigation}) => {
          return { headerTitle: () => <Header navigation={navigation} title={"About"}/> };
        }}
      />
    </Stack.Navigator>
  );
};
