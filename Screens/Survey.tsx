import React from 'react'
import { View, Text } from 'react-native'
import { Header } from "@rneui/themed";


function Survey() {
    return (
        <View >
            <Header 
            backgroundColor='purple'
            leftComponent={{ icon: 'keyboard-backspace', color: '#fff' }}
            centerComponent={{text:'SURVEYS', style: {color: 'white'}}}/>
        </View>
    )
}

export default Survey