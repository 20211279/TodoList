import React from 'react';
import { StyleSheet, View } from 'react-native';
import ToDoList from './components/todolist';

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  }
});
