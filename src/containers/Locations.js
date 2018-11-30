import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import RoomCards from "../components/RoomCards";

class Locations extends React.Component {
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

  render() {
    const { rooms } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          data={rooms}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Room", item);
              }}
            >
              <RoomCards
                title={item.title}
                id={item._id}
                description={item.description}
                photos={item.photos[0]}
                price={item.price}
                ratingValue={item.ratingValue}
                reviews={item.reviews}
                userPhoto={item.user.account.photos[0]}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item._id}
        />
      </View>
    );
  }
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

export default Locations;
