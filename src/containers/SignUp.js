import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";

import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    username: "",
    name: "",
    description: ""
  };

  onPress = () => {
    const { email, password, username, name, description } = this.state;
    axios
      .post("https://airbnb-api.now.sh/api/user/sign_up", {
        email: email,
        password: password,
        username: username,
        name: name,
        description: description
      })
      .then(response => {
        console.log(response.data);
        this.props.navigation.navigate("RoomPage");
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar barStyle="default" />
            <Text style={styles.title}>Create your account</Text>
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
            <TextInput
              style={styles.inputName}
              autoCapitalize="none"
              placeholder="username"
              value={this.state.username}
              onChangeText={value => {
                this.setState({ username: value });
              }}
            />
            <TextInput
              style={styles.inputName}
              autoCapitalize="none"
              placeholder="name"
              value={this.state.name}
              onChangeText={value => {
                this.setState({ name: value });
              }}
            />
            <TextInput
              style={styles.inputName}
              autoCapitalize="none"
              placeholder="description"
              value={this.state.description}
              onChangeText={value => {
                this.setState({ description: value });
              }}
            />
            <TouchableOpacity
              style={styles.buttonPressed}
              onPress={this.onPress}
            >
              <Text style={styles.textButton}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  title: {
    fontSize: 30,
    color: "white",
    marginTop: 50,
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

export default SignUp;
