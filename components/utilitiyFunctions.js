import {Text, ActivityIndicator,View} from 'react-native'
import tw from 'tailwind-react-native-classnames'

export const ConvertObjectToArray = (object) => {
    const arr = []
    for (const key in object) {
        arr.push({name: key, property: object[key]})
    }
    return arr;
}


export const LoadingData = (loading) => {
    // console.log(loading)
    return(
        <View  style={tw`mx-auto`}>
           {loading.Loading ? <ActivityIndicator size={30} color='#365C2A' /> : <Text>{loading.text}</Text>}
        </View>
    )
}

export const StateAsChapter = [
    'Abia','Adamawa','Akwa Ibom','Anambra','Benue', 'Borno',
    'Cross River','Delta', 'Ebonyi', 'Edo', 'Ekiti','Gombe',
    'Enugu','Jigawa','Imo','Kano', 'Kaduna', 'Kebbi', 'Katsina',
    'Kwara','Kogi','Lagos','Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun',
    'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
]