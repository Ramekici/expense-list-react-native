import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';


const SignUpScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text h3> Giriş Sayfası </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15
    },
});


export default SignUpScreen;