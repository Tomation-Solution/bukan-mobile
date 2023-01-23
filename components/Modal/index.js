import { View, Text, Modal } from 'react-native'
import React from 'react'

const ModalTemplate = (props) => {
  return (
    <View>
      <Modal
        visible={props.visible}
        transparent={props.transparent === undefined ? true : props.transparent}
        style={{borderWidth: 2,borderColor: "#000"}}
        // onDismiss={}
      >
          {props.body}
      </Modal>
    </View>
  )
}

export default ModalTemplate