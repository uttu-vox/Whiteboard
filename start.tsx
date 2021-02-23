import React, { Component }  from 'react';
import { StyleSheet, Alert, Text, View, Button, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                  source={require("../WhiteBoard-main/assets/images/Background.jpg")}
                  resizeMode="cover"
                  style={styles.image1}
                  imageStyle={styles.image1_imageStyle}
                >
                    <View style={styles.allYouNeedIsIdeaStack}>
                      <Text style={styles.allYouNeedIsIdea}>All you need is Idea</Text>
                      <Text style={styles.loremIpsum}></Text>
                    </View>
                    <Text style={styles.allYouNeedIsIdea1}>It is ”Beautiful”</Text>
                    <TouchableOpacity
                        onPress={() => this.goboard()}
                    >
                    <Image
                        style={styles.startButton}
                        source={require("../WhiteBoard-main/assets/images/Button.png")} />
                    </TouchableOpacity>
                </ImageBackground>
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
    },
    startButton: {
        top: -50,
        width: 200,
        height: 200,
        marginLeft: 150,
        resizeMode: 'contain',
    },
    image1: {
        width: 495,
        height: 667,
        marginLeft: -120
    },
    image1_imageStyle: {},
    allYouNeedIsIdea: {
        top: 0,
        left: 0,
        position: "absolute",
        fontFamily: "Helvetica",
        color: "rgba(192,222,243,1)",
        fontSize: 32
    },
    loremIpsum: {
        top: 20,
        left: 197,
        position: "absolute",
        fontFamily: "Helvetica",
        color: "#121212"
    },
    allYouNeedIsIdeaStack: {
        width: 282,
        height: 38,
        marginTop: 289,
        marginLeft: 138
    },
    allYouNeedIsIdea1: {
        fontFamily: "Helvetica",
        color: "rgba(192,222,243,1)",
        fontSize: 32,
        marginTop: 7,
        marginLeft: 170
    }
});