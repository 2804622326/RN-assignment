import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

/**
 * 新页面组件
 */
export default function NewPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the New Page!</Text>
      <Button title="Go Back to Home" onPress={() => navigation.goBack()} color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});