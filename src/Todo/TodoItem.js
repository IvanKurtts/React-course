import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
        background: 'rgb(69, 59, 81)',
        color: 'white',
        fontStyle: 'italic'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context);
    const classes = []
        if (todo.completed) {classes.push('done')}
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                    style={styles.input} 
                    checked={todo.completed}
                    type="checkbox" 
                    onChange={()=> onChange(todo.id)}
                />
                <strong>{index+1}.</strong>&nbsp;{todo.title}
            </span>
            <button className='btn-hover color-2' onClick={removeTodo.bind(null, todo.id)}>Delete</button>
            {/* <button className='rm' onClick={() => removeTodo(todo.id)}>&times;</button> */}
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;