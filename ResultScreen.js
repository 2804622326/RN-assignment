import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  // 从路由参数中获取运算结果
  const { finalResult } = route.params || { finalResult: 0 };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Result Screen</Text>
      <Text style={styles.resultText}>
        The final result is: {finalResult}
      </Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 20,
  },
});