import {
  createStackNavigator,
  createAppContainer,
  TabNavigator
} from "react-navigation";

import LogInScreen from "./src/containers/LogIn";
import LocationScreen from "./src/containers/Locations";
import SignUpScreen from "./src/containers/SignUp";
import RoomScreen from "./src/containers/Room";
import ProfileScreen from "./src/containers/Profile";

const AppNavigator = createStackNavigator({
  LogIn: {
    screen: LogInScreen,
    navigationOptions: () => ({
      header: null,
      headerBackTitle: null
    })
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerTintColor: "#ED6565"
    }
  },
  Locations: {
    screen: LocationScreen,
    navigationOptions: {
      headerLeft: null,
      headerBackTitle: null
    }
  },
  Room: {
    screen: RoomScreen,
    navigationOptions: {
      headerTintColor: "white"
    }
  },
  Profile: {
    screen: ProfileScreen
  }
});

// const tabNavigator = TabNavigator(
//   {
//     LogIn: {
//       screen: LogInScreen
//     },
//     Locations: {
//       screen: LocationScreen
//     },
//     Profile: { screen: ProfileScreen }
//   },
//   {
//     tabBarPosition: "bottom",
//     swipeEnabled: true,
//     tabBarOptions: {
//       activeTintColor: "#f2f2f2",
//       activeBackgroundColor: "#2EC4B6",
//       inactiveTintColor: "#666",
//       labelStyle: {
//         fontSize: 22,
//         padding: 12
//       }
//     }
//   }
// );

export default createAppContainer(AppNavigator);
