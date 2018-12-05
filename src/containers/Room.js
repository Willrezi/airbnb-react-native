import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import RoomCards from "../components/RoomCards";
import MapView from "react-native-maps";
import { ScrollView } from "react-native";
import StarRating from "react-native-star-rating";

class Room extends React.Component {
  static navigationOptions = {
    title: "Room",
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: "#ED6565"
    },
    headerLeftStyle: {
      color: "white"
    },
    headerTitleStyle: {
      color: "white"
    }
  };

  render() {
    const { params } = this.props.navigation.state;
    console.log(this.props.navigation.state.params);
    return (
      <ScrollView style={[styles.containerRoom, this.props.style]}>
        <ImageBackground
          style={styles.image}
          source={{ uri: params.photos[0] }}
        >
          <Text style={styles.price}>{params.price} €</Text>
        </ImageBackground>
        <View style={styles.container}>
          <View style={styles.description}>
            <View>
              <Text style={styles.title} numberOfLines={1}>
                {params.title}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <StarRating
                  starSize={15}
                  disabled={false}
                  maxStars={5}
                  rating={params.ratingValue}
                  fullStarColor={"#F4B73F"}
                  emptyStarColor={"#9A9A9A"}
                />
                <Text style={styles.reviews}>{params.reviews} reviews</Text>
              </View>
            </View>
            <Image
              style={styles.avatar}
              source={{ uri: params.user.account.photos[0] }}
            />
          </View>

          <Text style={styles.roomDescription} numberOfLines={3}>
            {params.description}
          </Text>
          <MapView
            style={styles.mapView}
            initialRegion={{
              latitude: params.loc[1],
              longitude: params.loc[0],
              latitudeDelta: 0.009,
              longitudeDelta: 0.009
            }}
          >
            <MapView.Marker
              coordinate={{ latitude: params.loc[1], longitude: params.loc[0] }}
            />
          </MapView>
        </View>
      </ScrollView>
    );
  }

  //   componentDidMount() {
  //     const { id } = this.props.navigation.state.params;
  //     axios.get("https://airbnb-api.now.sh/api/room/" + id).then(response => {
  //       this.setState({
  //         room: response.data
  //       });
  //       console.log(response.data);
  //     });
  //     //   .catch(error => {
  //     //     console.log("Api call error");
  //     //     alert(error.message);
  //     //   });
  //   }
}

const styles = StyleSheet.create({
  containerRoom: {
    flex: 1
    // alignItems: "center",
    // justifyContent: "center"
  },
  container: {
    marginLeft: 25,
    marginRight: 25
  },
  description: {
    flexDirection: "row",
    marginRight: 50
  },
  image: {
    position: "relative",
    marginBottom: 15,
    height: 300,
    width: "100%"
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  },
  price: {
    padding: 10,
    position: "absolute",
    bottom: 10,
    left: 0,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    fontSize: 20
  },
  reviews: {
    color: "#9A9A9A",
    paddingLeft: 5,
    fontSize: 15
  },
  avatar: {
    borderRadius: 30,
    width: 60,
    height: 60
  },
  roomDescription: {
    marginTop: 10,
    fontSize: 20
  },
  mapView: {
    flex: 1,
    height: 400,
    marginTop: 30
  }
});

export default Room;
