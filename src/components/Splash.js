import React from "react";
import { View, Image, Text } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";

const Splash = () => {
    return (
        <View>
            <View>
                <Image
                    source={require('../images/logo.png')}
                    style={{
                        position: 'absolute',
                        alignSelf:'center',
                        height: 200,
                        width: 143,
                        top:150
                    }}
                />
            </View>
            <View>
                <Image
                    style={{
                        position: 'absolute',
                        height: 50,
                        width: 50,
                        top: heightPercentageToDP('80%'),
                        alignSelf: 'center'
                    }}
                    source={require('../images/loading.gif')}
                />
            </View>
        </View>
    );
}

export default Splash;