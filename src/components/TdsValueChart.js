import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import TdsValue from './TdsValue';

const TdsValueChart = () => {
    return (
        <View style={styles.chartStyle}>
            <Text style={styles.headerStyle}>Standard Range of TDS Values</Text>
            <TdsValue value="Below 300" remarks="Excellent" valueColor='#fad3c8' remarksColor='#d6e5ff' />
            <TdsValue value="300 - 600" remarks="Good" valueColor='#ffbba8' remarksColor='#c2d8ff' />
            <TdsValue value="600 - 900" remarks="Fair" valueColor='#ff9b80' remarksColor='#abc7f7' />
            <TdsValue value="900 - 1200" remarks="Poor" valueColor='#ff7d59' remarksColor='#82aefa' />
            <TdsValue value="Above 1200" remarks="Unacceptable" valueColor='#ff653b' remarksColor='#6d9ced' />
        </View>
    );
}

const styles = StyleSheet.create({
    chartStyle: {
        marginTop: heightPercentageToDP('7%')
    },
    headerStyle: {
        backgroundColor: '#0495c4',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: widthPercentageToDP("1%")
    }
});

export default TdsValueChart;