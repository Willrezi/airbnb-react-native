import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RoomCards from "../components/RoomCards";
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
      <View style={styles.container}>
        <RoomCards
          photos={params.photos[0]}
          price={params.price}
          title={params.title}
          reviews={params.reviews}
          rating={params.ratingValue}
          userPhoto={params.user.account.photos[0]}
        />
        <Text style={styles.roomDescription} numberOfLines={3}>
          {params.description}
        </Text>
      </View>
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
  container: {
    flex: 1
    // alignItems: "center",
    // justifyContent: "center"
  },
  roomDescription: {
    marginLeft: 30,
    marginRight: 30
  }
});

export default Room;
