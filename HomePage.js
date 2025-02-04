import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

/**
 * 主页面组件
 */
export default function HomePage({ navigation }) {
  const [message, setMessage] = useState('Hello World');
  const [textColor, setTextColor] = useState('blue');

  const handlePress = () => {
    setMessage('You clicked the button!');
    setTextColor('white');
  };

  const handleReset = () => {
    setMessage('Hello World');
    setTextColor('blue');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: textColor }]}>{message}</Text>
      <Button title="Click Me" onPress={handlePress} color="black" />
      <View style={styles.buttonSpacing}>
        <Button title="Reset" onPress={handleReset} color="red" />
      </View>
      {/* 导航按钮 */}
      <View style={styles.buttonSpacing}>
        <Button
          title="Go to New Page"
          onPress={() => navigation.navigate('NewPage')}
          color="blue"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonSpacing: {
    marginTop: 20,
  },
});