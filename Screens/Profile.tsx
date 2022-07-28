import React from 'react'
import { View, Text } from 'react-native'
import { Header } from "@rneui/themed";

function Profile() {
    return (
        <View >
            <Header 
            backgroundColor='purple'
            leftComponent={{ icon: 'keyboard-backspace', color: '#fff' }}
            centerComponent={{text:'PROFILE', style: {color: 'white'}}}/>
        </View>
    )
}

export default Profile