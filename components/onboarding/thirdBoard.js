import { View, Text } from 'react-native'
import Onboarding from '.'


const ThirdBoard = ({navigation}) => {
  return (
    <View>
      <Onboarding
        image={require('../../images/onboarding/network.png')}
        title='Connect with all Members'
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet consequat pellentesque eget nisl. Amet consequat pellentesque eget nLorem ipsum dolor sit amet, consectetur adipiscing elit. Amet consequat pellentesque eget nisl. Amet consequat pellentesque eget n'
        navigation= {navigation}
        next='chapters'
        // next={navigation.navigate('first')}
      />
    </View>
  )
}

export default ThirdBoard