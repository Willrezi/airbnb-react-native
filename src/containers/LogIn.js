import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";

class LogIn extends React.Component {
  state = {
    email: "arno@airbnb-api.com",
    password: "password01"
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
        }
      })
      .catch(error => {
        console.log("error", err);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Image style={styles.image} source={require("../images/logo.png")} />
          <Text style={styles.title}>Welcome</Text>
          <TextInput
            style={styles.inputName}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Adresse email"
            value={this.state.email}
            onChangeText={value => {
              this.setState({ email: value });
            }}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Mot de passe"
            style={styles.inputPassword}
            onChangeText={value => {
              this.setState({ password: value });
            }}
          />
          <TouchableOpacity style={styles.buttonPressed} onPress={this.onPress}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonPressed}
            onPress={() => {
              this.props.navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.textButton}>Sign Up</Text>
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
    height: 130,
    width: 130,
    // marginTop: -50,
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
    justifyContent: "center",
    marginBottom: 20
  },
  textButton: {
    color: "#ED6565",
    fontSize: 20
  }
});

export default LogIn;
