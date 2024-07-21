import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from "react-native";

type Res = {
  prompt?: string;
  text: string;
};

const Prompt = () => {
  const [prompt, onChangePrompt] = useState("");
  const [responses, setReponses] = useState<Res[]>([]);

  const toSentenceCase = (str:any) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const {width} = useWindowDimensions();

  const handleSubmit = async () => {
    try {
      let url = "http://localhost:3001/prompt";

      let response=await fetch(url,{
                method:"POST",
                body:JSON.stringify({
                    prompt
                }),
                headers:{
                    "content-type":"application/json"
                }
            })
            let parseRes=await response.json()
            let resp:Res={
                prompt:parseRes.prompt,
                text:parseRes.error?parseRes.error:parseRes.text
            }

            setReponses([...responses, resp]);

            onChangePrompt("");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{padding:10}}>
        {responses.length > 0 ? (
          responses.map((response, index) => (
            <View key={index} style={styles.responseItem}>
              <Text style={styles.promptText}>{toSentenceCase(response.prompt)}</Text>
              <Text><b>Response</b>: <RenderHtml contentWidth={width} source={{html: response.text}} /></Text>
            </View>
          ))
        ) : (
          <Text>No responses yet.</Text>
        )}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.promptInput}
          onChangeText={onChangePrompt}
          value={prompt}
          placeholder="Enter prompt"
        />
        <Pressable onPress={handleSubmit}>
          <Ionicons size={24} color={'#fff'} name="send-sharp" />
        </Pressable>
      </View>
    </View>
  );
};

export default Prompt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop:10
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
    width:'100%',
    borderWidth:1,
    padding:8,
    backgroundColor:'#3b5998'
  },
  promptInput: {
    height: 40,
    borderRadius: 6,
    padding: 10,
    width:'90%',
    color:'#fff',
    fontSize:20
  },
  promptText: {
    fontWeight:'bold',
    marginBottom:5,
    borderBottomWidth:1,
    borderColor:'#ccc',
    paddingBottom:5
  },
  responseItem: {
    borderBottomWidth:1,
    borderColor:'#ccc',
    paddingHorizontal:10
  }
});
