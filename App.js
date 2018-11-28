import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./src/containers/Home";
import LocationScreen from "./src/containers/RoomPage";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
    // SignUp: {
    //   screen: SignUpScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // }
  },
  RoomPage: {
    screen: LocationScreen
  }
});

export default createAppContainer(AppNavigator);
