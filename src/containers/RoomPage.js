import React from "react";
import { StyleSheet, Text, View } from "react-native";

class RoomPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Appartement Paris</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ED6565",
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default RoomPage;
