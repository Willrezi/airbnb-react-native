import { createStackNavigator, createAppContainer } from "react-navigation";

import LogInScreen from "./src/containers/LogIn";
import LocationScreen from "./src/containers/Locations";
import SignUpScreen from "./src/containers/SignUp";
import RoomScreen from "./src/containers/Room";

const AppNavigator = createStackNavigator({
  LogIn: {
    screen: LogInScreen,
    navigationOptions: () => ({
      header: null
      //   headerBackTitle: null
    })
  },
  SignUp: {
    screen: SignUpScreen
    // navigationOptions: {
    //   header: null
    // }
  },
  Locations: {
    screen: LocationScreen,
    navigationOptions: {
      headerLeft: null,
      headerBackTitle: null
    }
  },
  Room: {
    screen: RoomScreen
  }
});

export default createAppContainer(AppNavigator);
