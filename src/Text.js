import React from 'react'

const Text = props => {
    return (
        <>
        <div style={{margin: '20px', borderBottom: '1px solid red'}}>
            {props.text}
        </div>
        <input onChange={props.enteryWord}></input>
        <button onClick={props.onChangeText}>Добавить в список</button>
        
        </>
    )
}

export default Text
