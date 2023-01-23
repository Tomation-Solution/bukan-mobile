import api from "../../api";
import localStorage from "react-native-sync-localstorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoginUser = async (data, callback, errcallback) => {
  const loggedIn = await AsyncStorage.getItem('loggedIn')
    const register = [['loggedIn', 'true'], ['isRegistered', 'true']]
  try {
    const response = await api.post(`tenant/buk/tenant/auth/login/`, data);
    // console.log(response)
    // alert(org)
    if (response.status == 200) {
      callback(response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user_email", data.email);
      localStorage.setItem("user_type", response.data.user_type);
      if(loggedIn === null){
        await AsyncStorage.multiSet(register)
      }
    }
  } catch (error) {
    errcallback();
    alert(error.response.data === undefined ? 'error connecting to network' : error.response.data.data.error[0]);
  }
};
export const ValidateMember = async (data, callback, errCallback) => {
  try {
    const response = await api.post(
      `tenant/buk/tenant/auth/ManageMemberValidation/`,
      data
    );
    if (response.status === 200) {
      // console.log(response)
      callback(response.data.data[0].user);
    }
  } catch (error) {
    errCallback(error.response.data.message);
  }
};

export const RegisterAsMember = async (data, callback, errCallback) => {
  try {
    const response = await api.post(
      "tenant/buk/tenant/auth/ManageMemberValidation/create_member/",
      data
    );

    if (response.status == 200) {
      localStorage.setItem("user_email", data.rel8Email);
      callback(response.data);
      await AsyncStorage.setItem('isRegistered', 'true')
    } else {
      throw new Error(response.data);
    }
  } catch (error) {
    errCallback(error.response.data.message.error);
  }
};
