import React, {useContext} from "react";
import Context from "./Context";
import PropTypes from 'prop-types'
import '../styles/goal.scss'

const s = {
    input: {
        marginRight: '1rem'
    },

    clear: {
        border: 'none',
        borderRadius: '50%',
        fontSize: '18px',
        cursor: 'pointer',
        outline: 'none',
    }
}

function TodoItem({todo, index, completeTodo}) {
    const {removeTodo} = useContext(Context)

    return (
        <li className="list__item">
            <span className={todo.completed ? 'list-goal done' : 'list-goal'}>
                <input
                    type="checkbox"
                    className="mark"
                    style={s.input}
                    onChange={() => completeTodo(todo.id)}
                    checked={todo.completed}/>
                <strong>{index + 1}</strong>
                <p className="list__desc" style={s.desc}>{todo.title}</p>
            </span>
            <button className="clear" style={s.clear} onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    completeTodo: PropTypes.func.isRequired
}

export default TodoItem