import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import LogInScreen from "./src/containers/LogIn";
import LocationScreen from "./src/containers/RoomPage";
import SignUpScreen from "./src/containers/SignUp";

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
  RoomPage: {
    screen: LocationScreen,
    navigationOptions: () => ({
      headerLeft: null
    })
  }
});

const TabNavigator = createBottomTabNavigator({
  RoomPage: {
    screen: LocationScreen
  },
  LogIn: {
    screen: LogInScreen
  }
});

export default createAppContainer(AppNavigator, TabNavigator);
