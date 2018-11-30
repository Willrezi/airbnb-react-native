import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import StarRating from "react-native-star-rating";
import PropTypes from "prop-types";

class RoomCards extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    photos: PropTypes.string,
    price: PropTypes.number,
    ratingValue: PropTypes.number,
    reviews: PropTypes.number,
    userPhoto: PropTypes.string
  };

  render() {
    const {
      title,
      photos,
      price,
      ratingValue,
      reviews,
      userPhoto
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <ImageBackground style={styles.image} source={{ uri: photos }}>
              <Text style={styles.price}>{price} €</Text>
            </ImageBackground>
          </View>

          <View style={styles.description}>
            <View>
              <Text numberOfLines={1} style={styles.textDescription}>
                {title}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <StarRating
                  starSize={15}
                  disabled={false}
                  maxStars={5}
                  rating={ratingValue}
                  fullStarColor={"#F4B73F"}
                  emptyStarColor={"#9A9A9A"}
                />
                <Text style={styles.reviews}>{reviews} reviews</Text>
              </View>
            </View>
            <Image style={styles.avatar} source={{ uri: userPhoto }} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 30,
    marginLeft: 30,
    marginRight: 30
  },
  card: {
    borderBottomWidth: 1,
    borderBottomColor: "#9A9A9A",
    paddingBottom: 10
  },
  image: {
    position: "relative",
    marginBottom: 15,
    height: 200,
    width: "100%"
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
  description: {
    flexDirection: "row"
  },
  textDescription: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 5,
    marginRight: 5
  },
  reviews: {
    color: "#9A9A9A",
    paddingLeft: 5
  },

  avatar: {
    borderRadius: 30,
    width: 60,
    height: 60
  }
});

export default RoomCards;
