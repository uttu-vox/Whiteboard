import React, { Component }  from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="稲員頑張ってシート"
                    onPress={() => {this.goboard();}}>
                </Button>
            </View>
        );
    }
    goboard() {
        this.props.navigation.navigate('Select2');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
});