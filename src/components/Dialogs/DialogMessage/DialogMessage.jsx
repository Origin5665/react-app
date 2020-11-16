import React from 'react';




const DialogMessage = (props) => {



    return (
        <div>
            <img alt="profile photo" src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80"></img>
            <li >
                {props.message}</li>
        </div>

    )
}

export default DialogMessage;