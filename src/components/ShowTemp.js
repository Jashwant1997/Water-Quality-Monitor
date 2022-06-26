import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import database from '@react-native-firebase/database';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const ShowTemp = () => {
    const [data, setData] = useState(0);

    setInterval(() => {
        database()
            .ref(`/sensor/temp`)
            .on('value', snapshot => {
                setData(snapshot.val());
            });
    }, 2000);

    return (
        <View style={styles.tempStyle}>
            <Text style={styles.tempTextStyle}>{Math.floor(data)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tempStyle: {
        position: 'absolute',
        zIndex: 99,
        // left:widthPercentageToDP('54%'),
        alignSelf: 'center',
        top: 70,
    },
    tempTextStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#0495c4',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        textShadowColor: 'black'
    }
});

export default ShowTemp;