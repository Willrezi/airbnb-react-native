import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeContainer from "./src/containers/Home";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(AppNavigator);
