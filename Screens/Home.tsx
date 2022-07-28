import * as React from 'react'
import { View, Text } from 'react-native'
import { Header } from "@rneui/themed";
import { SearchBar } from "@rneui/themed";

function Home() {
    return (
        <View>
            <Header 
            backgroundColor='purple'
            centerComponent={{text:'HOME', style: {color: 'white'}}}
            />
            <SearchBar 
                placeholder="Search..."
                round = {true}
                showCancel = {true}
                showLoading = {true}
                lightTheme = {true}
                
            />

        </View>
    )
}

export default Home