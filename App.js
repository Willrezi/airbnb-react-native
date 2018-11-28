import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeContainer from "./src/containers/Home";
import MovieContainer from "./src/containers/Movie";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(AppNavigator);
