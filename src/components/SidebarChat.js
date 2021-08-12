import React, { useEffect, useState } from 'react';
import './sidebarChat.css';
import { Avatar } from "@material-ui/core";

function SidebarChat() {

    const [seed, setSeed] = useState('');

    /* Random user */
    useEffect(()=>{
        setSeed(Math.floor(Math.random()* 5000));
    }, []);

    return (
        <div>
            <div className='sidebarChat'>
            {/* Api for random user avatar */}
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>    
                <div className="sidebarChat__info">
                    <h2>Room name</h2>
                    <p>last message...</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarChat;
