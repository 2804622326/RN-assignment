import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [input, setInput] = useState(''); // 存储输入框内容
  const [count, setCount] = useState(0); // 计数器状态
  const [backgroundColor, setBackgroundColor] = useState('white'); // 背景颜色状态

  // 动态更新背景颜色
  useEffect(() => {
    if (input.toLowerCase() === 'red') {
      setBackgroundColor('red');
    } else if (input.toLowerCase() === 'blue') {
      setBackgroundColor('blue');
    } else if (input.toLowerCase() === 'green') {
      setBackgroundColor('green');
    } else {
      setBackgroundColor('white'); // 默认颜色
    }
  }, [input]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* 输入框 */}
      <TextInput
        style={styles.input}
        placeholder="Enter a color (red, blue, green)"
        value={input}
        onChangeText={(text) => setInput(text)}
      />

      {/* 显示当前输入 */}
      <Text style={styles.text}>
        You entered: {input || 'Nothing yet'}
      </Text>

      {/* 计数器 */}
      <Text style={styles.counterText}>Count: {count}</Text>
      <Button title="Add +1" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  counterText: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});