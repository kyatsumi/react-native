import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>押してね</Text>
        <Button
            onPress={this.alertMessage}
            title='押してくれ！！！'
            color="#841584"
        />
      </View>
    );
  }

  alertMessage() {
      Alert.alert("押したね！")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
