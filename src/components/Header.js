import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = () => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.headerTextStyle}>Water Quality Monitor</Text>
            {/* <Image
                style={styles.bbsulImageStyle} 
                source={require('../images/logo-design.png')}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        alignItems: "center",
        paddingVertical: 20
    },
    headerTextStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color:"#1c5f75"
    }
});

export default Header;