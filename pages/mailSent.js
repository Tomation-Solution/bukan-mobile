import { NavigationContainer } from '@react-navigation/native'
import { View, Text, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import RoundedButton from '../components/button/RoundedButton'

const MailSent = ({navigation}) => {
  return (
    <View style={tw`h-full mx-10`}>
      {/* <Text>mailSent</Text> */}
      <View>
        <Image source={require('../images/onboarding/email.png')}/>
      </View>
      <Text style={tw`text-center`}>A link has been sent to your email address to recover account</Text>
      <View style={tw`pt-16`}>
        <RoundedButton 
            text='Continue' 
            pressed={navigation.navigate('confirmCode')}
        />
      </View>
    </View>
  )
}

export default MailSent