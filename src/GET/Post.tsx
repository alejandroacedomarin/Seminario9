import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { User } from '../models/user';

interface CreateUserProps {
    updateUserList: () => void;
}
 
 function GetPost() {
  const [_id, setId] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [author, setAuthor] = React.useState('');
  let g :boolean=false;
  const [error, setError] = React.useState('');

  

  const Submit = () => {
    

    axios.get("http://localhost:3000/post/"+_id)//para web
    //axios.post('http://10.60.144.140:3000/user', user)//para android
      .then(response => {
        Alert.alert("Success", "User added successfully");
        console.log(response.data);
        setTitle(response.data.data.title);
        setContent(response.data.data.content);
        setAuthor(response.data.data.author);
        g= true;
        
      })
      .catch(error => {
        console.error("Failed to add user", error);
        Alert.alert("Error", "Failed to add user");
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Id"
        
        onChangeText={setId} 
        style={styles.input} 
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={Submit} color="#007bff" />
      </View>
      
      {title && content && author && (
        <View>
          <Text>{title}</Text>
          <Text>{content}</Text>
          <Text>Autor: {author}</Text>
        </View>
      )}
        
      
      
       
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default GetPost;


