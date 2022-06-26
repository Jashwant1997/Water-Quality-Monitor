import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import TdsValueChart from '../components/TdsValueChart'
import ShowTDS from '../components/ShowTDS';
import ShowTemp from '../components/ShowTemp';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const HomeScreen = () => {
    return (
        <ScrollView>
            <View
                // style={{
                //     // alignSelf: 'center',
                //     width: wp('100%'),
                //     height: hp('105%')
                // }}
            >
                <Image
                    style={{
                        alignSelf: 'center',
                        width: wp('100%'),
                        height: hp('105%')
                    }}
                    source={require('../images/background3.jpg')}
                />
            </View>
            <View style={{
                paddingTop: 50,
                position: 'absolute',
                alignSelf: 'center'
            }}>
                <ShowTDS />
                <ShowTemp />
                <Image
                    style={{
                        height: 200,
                        width: 200,
                        // left: wp('30%'),
                        alignSelf: 'center'
                    }}
                    source={require("../images/water2.gif")}
                />
                <TdsValueChart />
            </View>
        </ScrollView>
    );
}

export default HomeScreen;