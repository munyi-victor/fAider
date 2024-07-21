import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

const PromptSection = () => {
  const [prompt, onChangePrompt] = useState('');

  return (
    <View
      style={{
        flex:1,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <View>
        <Text>Hello World</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.promptInput}
          onChangeText={onChangePrompt}
          value={prompt}
          placeholder="Enter prompt"
        />
        <TouchableOpacity>
          <Ionicons size={24} name="send-sharp" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PromptSection

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems:'center',
  },
  promptInput: {
    height: 40,
    margin: 12,
    borderRadius:6,
    padding:10,
    borderWidth:2,
    backgroundColor:'#ddd'
  }
})