import React, {useState} from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function FieldTodo({onCreated}) {
    const input = useInputValue('')

    function handlerSubmit(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreated(input.value())
            input.clear()
        }
    }
    
    return (
        <form action="" className="field" style={{ marginBottom: '1rem' }} onSubmit={handlerSubmit}>
            <input type="text" className="field__input" {...input.bind}/>
            <button type="submit" className="field__btn">Add Todo</button>
        </form>
    );
}

FieldTodo.propTypes = {
    onCreated: PropTypes.func.isRequired
}

export default FieldTodo