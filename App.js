import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./src/containers/Home";
import LocationScreen from "./src/containers/RoomPage";
import SignUpScreen from "./src/containers/SignUp";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
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
