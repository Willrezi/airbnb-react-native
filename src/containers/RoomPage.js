import React from "react";
import { StyleSheet, View, StatusBar, FlatList } from "react-native";
import axios from "axios";
import RoomCard from "../components/RoomCard";

class RoomPage extends React.Component {
  state = {
    rooms: [],
    city: "paris"
  };

  static navigationOptions = {
    title: "MonAirbnb",
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: "#ED6565"
    },
    headerTitleStyle: {
      color: "white"
    }
  };

  componentDidMount() {
    const { city } = this.state;

    axios
      .get("https://airbnb-api.now.sh/api/room", {
        params: {
          city: city
        }
      })
      .then(response => {
        this.setState({ rooms: response.data.rooms });
        console.log(response.data.rooms);
      });
  }

  render() {
    const { rooms } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <FlatList
          data={rooms}
          renderItem={({ item }) => (
            <RoomCard
              title={item.title}
              photos={item.photos[0]}
              price={item.price}
              ratingValue={item.ratingValue}
              reviews={item.reviews}
              userPhoto={item.user.account.photos[0]}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default RoomPage;
