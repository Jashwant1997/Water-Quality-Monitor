import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const TdsValue = ({ value, remarks, valueColor, remarksColor }) => {

    return (
        <View style={styles.mainBox}>
            <Text style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
                backgroundColor: valueColor,
                textAlign: 'center',
                flex: 1.3,
                paddingVertical: 15
            }}>
                {value}
            </Text>
            <Text style={{
                color:'black',
                fontSize: 20,
                fontWeight: 'bold',
                backgroundColor: remarksColor,
                textAlign: 'center',
                flex: 2,
                paddingVertical: 15
            }}>
                {remarks}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainBox: {
        flexDirection: 'row',
        marginHorizontal: widthPercentageToDP("1%")
    }
});

export default TdsValue;