import { View, SafeAreaView, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { StateAsChapter } from "../components/utilitiyFunctions";
import tw from 'tailwind-react-native-classnames'
import RoundedButton from '../components/button/RoundedButton'
import TabbedButton from '../components/button/RoundedButton'
import ModalTemplate from '../components/Modal'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { LoginUser } from '../connection/actions/authentication/authentication'


const OwingWidget = () => {
  const [checked, setChecked] = useState(false)
  return (
    <View style={tw`bg-white mx-10 px-5 py-5 my-auto rounded-2xl`}>
      <Text style={tw`text-center mb-1`}> ACCOUNT LOCKED</Text>
      <Text style={tw`text-xs my-2`}>Pay outstanding fee to gain access to account</Text>
      <View style={tw`flex-row justify-between my-2`}>
        <Text>TOTAL OUTSTANDING: </Text>
        <Text>N 120,000 </Text>
      </View>

      <View style={tw`flex-row justify-between my-4`}>
        <Text style={tw`text-xs `}>Pay partial amount of Total outstanding</Text>
        {checked ?
          <Ionicon name='checkbox' size={20} onPress={() => setChecked(!checked)} /> :
          <Ionicon name='ios-square-outline' size={20} onPress={() => setChecked(!checked)} />
        }

      </View>
      {checked ?
        <View style={tw`border-b  mb-2`}>
          <TextInput
            placeholder='Enter Amount you want to pay'
          />
        </View> : <></>}
      <View style={tw`w-5/12 mx-auto`}>

        <RoundedButton text='Pay' />
      </View>

    </View>
  )
}

const Login = ({ navigation, route }) => {
  const [selectedChapter, setSelectedChapter] = useState()

  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false);
  const [selectedloginOption, setSelectedLoginOption] = useState('national');

  // console.log(route.params.user)
  const callback = () => {
    setLoading(false)
    navigation.navigate('dashboard')
  }

  const errcallback = () => {
    setLoading(false)
  }

  const handleLogin = () => {
    if (loginData.password.length > 2 && loginData.password.length > 4) {
      setLoading(true)
      LoginUser(loginData, callback, errcallback)
    }
  }

  const handleLoginOption = (selection) => {
    if(selection === 'national'){
      setSelectedLoginOption(selection)
    }
    else setSelectedLoginOption(selection)
  }


  return (
    <SafeAreaView >
      <Image 
        style={[tw`mx-auto my-8`, { height: 90, width: 150 }]} 
        source={require('../images/Logo/Bukka_Splash.png')}
        resizeMode="cover"
      />
      <View style={tw`flex-row w-full justify-center mb-8`}>
         <TouchableOpacity
         style={[tw`py-2 w-1/2 ${selectedloginOption === 'national' ? 'border-b-4' : 'border-b-0'}`,{borderBottomColor: "#0089ce"}]}
         onPress={() => handleLoginOption('national')}>
          <Text style={{textAlign: 'center'}}>National</Text>
         </TouchableOpacity>
         <TouchableOpacity
         style={[tw`py-2 w-1/2 ${selectedloginOption === 'chapter' ? 'border-b-4' : 'border-b-0'}`,{borderBottomColor: "#0089ce"}]}
         onPress={() => handleLoginOption('chapter')}>
          <Text style={{textAlign: 'center'}}>Chapter</Text>
         </TouchableOpacity>
      </View>
      <View style={tw`mx-10`}>
        <Text style={tw`text-base font-bold`}>Login</Text>
        <Text>Enter login details.</Text>
      </View>

      <View style={tw`mt-3 mx-7 py-6 bg-white shadow-sm rounded-3xl px-5`}>

        <View>
          {selectedloginOption === 'chapter' ? 
          <View style={[tw`my-3 border-b`]}>
            <Text>Chapter</Text>
            <Picker
              selectedValue={selectedChapter}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedChapter(itemValue)
              }>
                <Picker.Item label="Select Chapter" value="" />
              {StateAsChapter.map((state,index) => <Picker.Item label={state} value={state.toLowerCase()} key={index}/>)}
            </Picker>
          </View> : null}
          <View style={tw`my-3 border-b`}>
            <Text>Username</Text>
            <TextInput
              placeholder='username'
              style={tw`py-2`}
              onChangeText={(text) => setLoginData({ ...loginData, 'email': text })}
            />
          </View>
          <View style={tw`my-3 border-b`}>
            <Text>Password</Text>
            <TextInput
              placeholder='Pasword'
              style={tw`py-2`}
              secureTextEntry={true}
              onChangeText={(text) => setLoginData({ ...loginData, 'password': text })}

            />
          </View>
        </View>
        <View style={tw`mt-3`}>
          {loading ? (
            <ActivityIndicator color="purple" size="large" />
          ) : (
            <RoundedButton text="Login" pressed={() => handleLogin()} />
          )}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')}>
          <Text style={tw`text-xs`}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login