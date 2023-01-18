import React from "react";

const Demo = (props) => {
    console.log('DEMO IS RUNNING')

    return(
        <p>
            {props.onShow ? 'This is new' : ''}
        </p>
    )
}

export default Demo
