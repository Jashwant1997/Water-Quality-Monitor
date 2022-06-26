import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const ShowTDS = () => {
    const [data, setData] = useState(0);

    setInterval(() => {
        database()
            .ref(`/sensor/tds`)
            .on('value', snapshot => {
                setData(snapshot.val());
            });
    }, 2000);

    return (
        <View style={styles.tdsStyle}>
            <Text style={styles.tdsTextStyle}>{Math.floor(data)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tdsStyle: {
        position: 'absolute',
        zIndex: 99,
        alignSelf:'center',
        // left:widthPercentageToDP('38%'),
        top: 170,
    },
    tdsTextStyle: {
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle:'italic',
        color: '#ffffff',
        textShadowOffset: { width: 2, height: 3 },
        textShadowRadius: 5,
        textShadowColor: 'black'
    }
});

export default ShowTDS;