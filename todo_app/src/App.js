import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'
import './App.css';

function App() {
  const [todos, setTodos] = useState(['abc', 'def ']);
  const [input, setInput] = useState('');

  //when the app loads we need the data to be fetched form the database and add new todos as they get added or removed 
  useEffect(() => {
    db.collection('todo_task').orderBy('timestamp','desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const addTodo = (event) => {
    //this will fireoff when we click the button
    event.preventDefault();
    
    db.collection('todo_task').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })


    setTodos([...todos, input]); 
    setInput('');
  }
  return (
    <div className="App">
     <h1>ToDo</h1>
     <form>
     <FormControl>
      <InputLabel >Write a todo</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)}/>
     </FormControl>

     <Button disabled={!input} type="submit" variant="contained" color="primary"  onClick={addTodo}>
     Add todo
     </Button>
     </form>
     

     <ul>
       {todos.map(todo => (
         <Todo text={todo}/>
        //  <li>{todo}</li>
       ))}
     </ul>
    </div>
  );
}

export default App;
