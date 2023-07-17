import React, { useState } from 'react';



const AddEntry = (props) => {

    const [userName, setUserName] = useState('')
    const [text, setText] = useState('')
    const [likedStatus, setLikedStatus] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            userName: userName,
            text: text,
            likedStatus: likedStatus
        };
        console.log(newEntry)
        props.addNewEntryProperty(newEntry)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>User Name</label>
            <input type='string' value={userName} onChange={(event) => setUserName(event.target.value)} />
            <label>Text</label>
            <input type='string' value={text} onChange={(event) => setText(event.target.value)}/>
            <label>Liked Status</label>
            <input type='bool' value={likedStatus} onChange={(event) => setLikedStatus(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    );
}
 
export default AddEntry;