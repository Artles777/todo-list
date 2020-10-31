import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

const s = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

function TodoList(props) {
    return (
        <ul className='list' style={s.ul}>
            {props.todos.map((todo, index) =>
                <TodoItem todo={todo} key={todo.id} index={index} completeTodo={props.toggleGoal}/>)}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleGoal: PropTypes.func.isRequired
}

export default TodoList