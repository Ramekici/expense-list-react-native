import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Fontawesome';


const EntryScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.centerView}>
                <Text h1>Expense Tracker</Text>
                <Icon name={'money'} size={200} style={{ marginBottom: -3 }} />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="sign up" onPress={() => navigation.navigate("Sign Up")} />
                <Button
                    title="login" onPress={() => navigation.navigate("Login")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15
    },
    centerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }

});


export default EntryScreen;