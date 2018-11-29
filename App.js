import { createStackNavigator, createAppContainer } from "react-navigation";

import LogInScreen from "./src/containers/LogIn";
import LocationScreen from "./src/containers/RoomPage";
import SignUpScreen from "./src/containers/SignUp";

const AppNavigator = createStackNavigator({
  LogIn: {
    screen: LogInScreen,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUpScreen
    // navigationOptions: {
    //   header: null
    // }
  },
  RoomPage: {
    screen: LocationScreen
  }
});

export default createAppContainer(AppNavigator);
