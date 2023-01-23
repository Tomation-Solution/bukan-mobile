import { View, Text, ScrollView, TouchableOpacity,Image, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'

import CommentCard from '../../components/News/CommentCard'
import WriteCommentCard from '../../components/News/WriteCommentCard'
import RoundedButton from '../../components/button/RoundedButton'
import ModalTemplate from '../../components/Modal'
import { SafeAreaView } from 'react-native-safe-area-context'
import TobBar from '../../components/topBar'
import { GetProfile, RequestCall } from '../../connection/actions/user.actions'
import moment from 'moment'



const ViewEvent = ({navigation,route}) => {
  const [register, setRegister] = useState(false)
  const [status, setStatus] = useState(false)
  // const [profile,setProfile] = useState([])
  const [link,setLink] = useState(route.params !== undefined ? route.params.item.event_access.link : 'pending')
  const [member,setmember] = useState({})
  const [responseMessage,setResponseMessage] = useState('')
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            GetProfile(callback)
        });
        return unsubscribe;
    },[])

  const callback = (data) => {
    GetMeetinDetails(data.more_info)
  }

  const GetMeetinDetails = (data) => {
    for (let index = 0; index < data.length; index++) {
      member[data[index].name] = data[index].value
    }
  }

  return (
    <SafeAreaView>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
            <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
            <Text style={tw`my-auto font-bold text-base`}>Events</Text>
            <Ionicon name='md-notifications' style={tw`text-purple-800`} size={30}/>
          </View>
        }
        />
    <ScrollView style={tw`h-full`}>
      <ModalTemplate 
        visible={register}
        body={<ModalRegisterComponent setResponseMessage={setResponseMessage}
          member={member} setLink={setLink} setVisible={setRegister} event={route.params.item} setStatus={setStatus}/>}
      />

      <ModalTemplate 
        visible={status}
        body={<ModalSucess responseMessage={responseMessage} setVisible={setStatus}  setStatus={setStatus}/>}
      />

        {/* <View style={tw`h-60 p-3`}>
            <Image  
            resizeMode='cover'
            style={tw`h-full w-full rounded-lg`}
            source={require('../../images/onboarding/phone.png')}/>
        </View> */}
        
        <View style={tw`px-4 py-2`}>
            <Text style={tw`text-base font-bold text-purple-800 py-1`}>{route.params.item.name}</Text>
            
          <View style={tw`border-t border-b border-gray-500 my-2 py-2`}>
            <View style={tw`flex-row`}> 
              <MaterialIcon name='event' size={25} color='purple'/>
              <Text style={tw`ml-3`}>{moment(route.params.item.startDate).format("MMMM Do, YYYY") + ' - '+ route.params.item.startTime}</Text>
            </View>
            
            <View style={tw`flex-row my-2 pr-2`}> 
              <MaterialIcon name='location-on' color='purple' size={25}/>
              {link === 'pending' ? <Text style={tw`ml-3`}>No Link attached yet</Text> : 
                <Pressable style={tw`w-fit px-1 py-1`} onPress={() => console.log('pressed')}><Text style={tw`text-sm`}>Link</Text></Pressable>
               }
            </View>

          </View>

            
          {/* <CommentCard/> */}

            {/* <Text style={tw`text-justify text-gray-400 py-1`}>5 Likes</Text> */}

        {/* <View style={tw`border-t border-b border-gray-500 py-2`}>
          <Text style={tw`text-purple-800 font-bold`}>Details</Text>

          <Text style={tw`text-justify text-gray-800 py-1`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Et lacus lacus, proin proin egestas. Augue 
            scelerisque pellentesque nullam montes, pretium. 
            Nisl, in netus Et lacus lacus, proin proin egestas. 
            Augue scelerisque pellentesque nullam montes,
             pretium. Nisl, in netus 
          </Text>
          
        </View> */}
       

        {/* //View More */}
        <View style={[tw``,{marginTop: "90%"}]}>
          <Text style={tw`text-purple-800 pt-2 font-bold`}>Gate Fee</Text>
          
          <Text style={tw`text-black font-bold`}>{!route.params.item.is_paid_event ? <Pressable><Text>Free</Text></Pressable>: 'N '+Math.round(route.params.item.amount)}</Text>
          
          {/* Regiser Button */}
          <View style={tw`my-7 mx-5`}>
            <RoundedButton 
              text='Register'
              pressed={()=>setRegister(true)}
            />
          </View>
        </View>
        </View>  
        
        
      
    </ScrollView>
    </SafeAreaView>
  )
}


const ModalRegisterComponent =(props)=>{

  const [payFee, setPayFee] = useState(false)
  const member = props.member
  // const handleStatus=(status)=>{
  //   if(status==true){
  //     props.setStatus(true);
  //     props.setVisible(false)
  //   }
  // }

  const registerForEvent = () => {

    const formData = new FormData()

    formData.append('event_id', props.event.id)
    RequestCall('post',formData,callback,errcallback,'event/eventview/register_for_free_event/','formdata')
  }

  const callback = (res) => {
    props.setStatus(true);
    props.setVisible(false)
    if(res.success){
      props.setResponseMessage(res.message)
      props.setLink(true)
    }
  }

  const errcallback = (err) => {
    console.log('err',err)
  }

  return(
    <View style={tw`bg-white m-auto w-11/12 py-5 rounded-xl`}>
      <Text style={tw`text-center font-bold py-3`}>REGISTER</Text>
      <Text style={tw`px-5 font-bold text-purple-800`}>Name</Text>
      <Text style={tw`mx-5 font-bold py-1 border-b`}>{member.Name}</Text>

      <View style={tw`py-2`}>
        <Text style={tw`px-5 font-bold text-purple-800`}>Email Address</Text>
        <Text style={tw`mx-5 font-bold py-1 border-b`}>{member.email}</Text>
      </View>

      <View style={tw`py-2`}>
        <Text style={tw`px-5 font-bold text-purple-800`}>Phone Number</Text>
        <Text style={tw`mx-5 font-bold py-1 border-b`}>{member["Phone Number"]}</Text>
      </View>


      {Math.round(props.event.amount) !== 0 ? <View style={tw`py-2`}>
        <Text style={tw`px-5 font-bold text-purple-800`}>Entry Fee</Text>
        <Text style={tw`mx-5 font-bold py-1 border-b`}>N {Math.round(props.event.amount)}</Text>
      </View> : null}
{/* { props.event.type=='member' ?
<>
      <View style={tw`py-2 flex-row`}>
        <View style={tw`py-2 flex-row`}>
          <Text style={tw`pl-5 font-bold text-purple-800`}>Attire Fee:</Text>
          <Text style={tw` px-2 my-auto font-bold py-1 `}>N 5,000</Text>
        </View>
        {payFee ==false ?
        <MaterialIcon name='check-box-outline-blank' style={tw`my-auto`} size={23} onPress={()=>setPayFee(true)}/>
        :
        <MaterialIcon name='check-box' style={tw`my-auto`} size={23} onPress={()=>setPayFee(false)}/>

        }
      </View>

      <View style={tw`py-2 flex-row`}>
        <View style={tw`py-2 flex-row`}>
          <Text style={tw`pl-5 font-bold text-purple-800`}>Delivery Fee:</Text>
          <Text style={tw` px-2 my-auto font-bold py-1 `}>N 5,000</Text>
        </View>
        {payFee ==false ?
        <MaterialIcon name='check-box-outline-blank' style={tw`my-auto`} size={23} onPress={()=>setPayFee(true)}/>
        :
        <MaterialIcon name='check-box' style={tw`my-auto`} size={23} onPress={()=>setPayFee(false)}/>

        }
      </View></>
    :<></>}   */}
      <View style={tw`mx-8 flex-row mt-3 mx-auto`}>
        <View style={tw`w-3/6`}> 
          <RoundedButton text={Math.round(props.event.amount) !== 0 ? 'Pay' : 'Submit'} 
          pressed={()=>registerForEvent()}
          />
        </View>
        <TouchableOpacity onPress={()=>props.setVisible(false)} style={tw`my-auto px-5`}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>

      </View>
    
  )
}

const ModalSucess =(props)=>{
  return (
    <View style={tw`bg-white m-auto w-10/12 py-5 rounded-xl`}>
      <Text style={tw`text-center font-bold py-3`}>SUCCESS</Text>
      <MaterialIcon name='check-circle' size={55}  style={tw`text-center text-purple-700 py-3`}/>
      
      <Text style={tw`text-center pb-7`}>{props.responseMessage}</Text>

      
      <View style={tw`mx-8 flex-row mt-3 mx-auto`}>
        <View style={tw`w-3/6`}> 
          <RoundedButton text='Go Back' pressed={()=>props.setVisible(false)}/>
        </View>
        {/* <TouchableOpacity onPress={()=>props.setVisible(false)} style={tw`my-auto px-5`}>
          <Text>Cancel</Text>
        </TouchableOpacity> */}
      </View>

      </View>
  )
}

export default ViewEvent