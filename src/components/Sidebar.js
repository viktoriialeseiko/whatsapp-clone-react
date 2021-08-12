import React, { useState, useEffect } from 'react';
import SidebarChat from './SidebarChat';
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import db from '../firebase';
// import {useStateValue} from '../StateProvider';
// import { Unsubscribe } from '@material-ui/icons';
import './sidebar.css';

function Sidebar() {

    const [rooms, setRooms] = useState([]);

    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot=>
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
                }))
            )
        )
        /* clean up function when component unmount, when u finish using */
        // return () => {
        //     unsubscribe();
        // }
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className= 'sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input type='text' placeholder='Search or start new chat'/>
                </div>
            </div>

            <div className='sidebar__chats'>
                <SidebarChat addNewChat/>
                {rooms.map(room => {
                    return <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                })}
            </div>
        </div>
    )
}

export default Sidebar;

