import React, { useEffect, useState } from 'react';
import './sidebarChat.css';
import { Avatar } from "@material-ui/core";

function SidebarChat( {addNewChat} ) {

    const [seed, setSeed] = useState('');

    /* Random user */
    useEffect(()=>{
        setSeed(Math.floor(Math.random()* 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt('Please enter name for chat room');

        if(roomName){
            //push information to database
            // db.collection('rooms').add({
            //     name: roomName,
            // })
        }
    };

    return !addNewChat ? (
        <div className='sidebarChat'>
            {/* Api for random user avatar */}
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room name</h2> 
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat;