import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import axios from "axios";

class Home extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onPress = () => {
    axios
      .post("https://airbnb-api.now.sh/api/user/log_in", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response.data);
        if (response.data && response.data.token) {
          this.props.navigation.navigate("RoomPage");
          ({
            token: response.data.token,
            id: response.data._id
          });
        }
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.container}>
          <Image style={styles.image} source={require("../images/logo.png")} />
          <Text style={styles.title}>Welcome</Text>
          <TextInput
            style={styles.inputName}
            keyboardType="email-address"
            autoCapitalize="none"
            value={this.state.email}
            onChangeText={value => {
              this.setState({ email: value });
            }}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.inputPassword}
            onChangeText={value => {
              this.setState({ password: value });
            }}
          />
          <TouchableOpacity style={styles.buttonPressed} onPress={this.onPress}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ED6565",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 150,
    width: 150,
    // marginTop: 50,
    marginBottom: 50
  },
  title: {
    color: "white",
    fontSize: 40,
    marginBottom: 50
  },
  inputName: {
    borderBottomWidth: 1,
    width: 250,
    paddingLeft: 20,
    paddingBottom: 15,
    marginBottom: 50,
    color: "white",
    fontSize: 15,
    borderBottomColor: "white"
  },
  inputPassword: {
    borderBottomWidth: 1,
    width: 250,
    paddingLeft: 20,
    paddingBottom: 15,
    marginBottom: 50,
    color: "white",
    fontSize: 15,
    borderBottomColor: "white"
  },
  buttonPressed: {
    backgroundColor: "white",
    height: 60,
    width: 150,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  textButton: {
    color: "#ED6565",
    fontSize: 20
  }
});

export default Home;
