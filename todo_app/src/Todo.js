import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react';
import './Todo.css';

function Todo(props) {
    console.log("ishwar " + props.text)
    return (
        <List className="todo_list">
            <ListItem>
                {/* <ListItemAvatar>
                </ListItemAvatar> */}
                <ListItemText primary={props.text} secondary="Deadline"/>
            </ListItem>
        </List>

    )
}

export default Todo
