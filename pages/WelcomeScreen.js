import { Image, ImageBackground, Text, View, TouchableOpacity, } from "react-native";
import tw from "tailwind-react-native-classnames";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RoundedButton from "../components/button/RoundedButton";
import { StateAsChapter } from "../components/utilitiyFunctions";
import { useState, useEffect, Component } from "react";
import { ActivityIndicator } from "react-native-web";

class AppWelcomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRegister: 'false',
      timeout: false
    }
  }

  getIsReg = async () => {
    const item = await AsyncStorage.getItem('isRegistered')
    if (item !== null) {
      this.setState({ isRegister: 'true' })
    }
  }

  componentDidMount() {
    const unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getIsReg()
    })
    return unsubscribe;
  }

  Load = () => {
    setTimeout(() => {
      this.setState({timeout: true})
      return(
        <ActivityIndicator />
      )
    }, 500)
  }

  render() {
    return (
      <View style={tw`flex-1`}>
        <View style={[tw`h-1/2 flex-auto flex-col justify-center mb-5`]}>
          <Image
            style={tw`mt-auto mx-auto h-3/6`}
            source={require("../images/Logo/Bukka_logo.png")}
            resizeMode='contain'
            resizeMethod='scale'
          />
        </View>
        <View style={tw`flex-col h-1/2 justify-start px-4 pt-5`}>
          <View style={tw`flex-col h-1/2 justify-start px-4 pt-10`}>
            {!this.state.timeout ? <this.Load /> : <View style={tw`flex-row ${this.state.isRegister === 'false' ? 'justify-between' : 'mx-auto'} pt-8 px-8 mb-7`}>
              <RoundedButton
                text="Login"
                style={[tw`px-7`, { borderRadius: 15 }]}
                rounded=''
                textStyle={tw`text-sm font-semibold`}
                pressed={() => this.props.navigation.navigate("login")}
              />
              {this.state.isRegister === 'false' ? <RoundedButton
                text="Verify"
                borderWidth={2}
                borderColor="#0092dc"
                bgColor="transparent"
                rounded=''
                style={[tw`px-7`, { borderRadius: 15 }]}
                textStyle={tw`text-sm font-semibold`}
                textColor="#0092dc"
                pressed={() => this.props.navigation.navigate("verification")}
              /> : null}
            </View>}
          </View>
          <View style={tw`flex-row mx-auto py-2`}>
            <Text>Don't have an Account?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("register")}>
              <Text style={[tw` font-bold`, { color: '#0092dc' }]}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

export default AppWelcomeScreen;
