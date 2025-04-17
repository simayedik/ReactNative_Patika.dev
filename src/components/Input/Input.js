import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';

function Input({value, onChangeText}) {
  return (
    <View>
      <TextInput
        placeholder="Kategori ara..."
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
}

export default Input;
