import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
    render() {
		return (
      <View style={styles.container}>
      <Button
          title="Home"
          onPress={() => {this.goboard();}}>
      </Button>
      </View>
    );
    }
  goboard() {
  this.props.navigation.navigate('Select1');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});