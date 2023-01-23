import { View, Text } from 'react-native'
import Onboarding from '.'


const Secondoard = ({navigation}) => {
  return (
    <View>
      <Onboarding
        image={require('../../images/onboarding/phone.png')}
        title='Get Important Updates'
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet consequat pellentesque eget nisl. Amet consequat pellentesque eget nLorem ipsum dolor sit amet, consectetur adipiscing elit. Amet consequat pellentesque eget nisl. Amet consequat pellentesque eget n'
        navigation= {navigation}
        next='third'
        // next={navigation.navigate('first')}
      />
    </View>
  )
}

export default Secondoard