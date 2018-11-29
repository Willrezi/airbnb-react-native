import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import axios from "axios";
import RoomCard from "../components/RoomCard";

class RoomPage extends React.Component {
  state = {
    rooms: [],
    city: "paris"
  };

  static navigationOptions = {
    title: "MonAirbnb",
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
        this.setState({ rooms: response.data });
        console.log(response.data);
      });
  }

  render() {
    const { photos, price, ratingValue } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <RoomCard picture={photos} price={price} ratingValue={ratingValue} />
        </View>
      </ScrollView>
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
