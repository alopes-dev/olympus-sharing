import { createStackNavigator } from "@react-navigation/stack";
import { SharedInScreen } from "@root/screens";
import NonConnectedOlympusScreen from "@root/screens/non-connected-olympus";
import theme from "@root/styles/theme";
import { RootStackParamList } from "../navigation.types";

const Stack = createStackNavigator<RootStackParamList>();

const SharedInStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SharedIn"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.COLORS.dark.background,
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="SharedIn" component={SharedInScreen} />
      <Stack.Screen
        name="NonConnectedOlympus"
        component={NonConnectedOlympusScreen}
      />
    </Stack.Navigator>
  );
};

export default SharedInStackNavigation;
