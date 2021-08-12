import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AttachFile } from '@material-ui/icons';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './chat.css';
// import db from '../firebase';
// import firebase from 'firebase';
// import {useStateValue} from "../StateProvider";

function Chat() {
    const [seed, setSeed] = useState('');

    /* Random user*/
    useEffect(()=>{
        setSeed(Math.floor(Math.random()* 5000));
    }, []); //everytime when roomId changes

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>
                    Last seen at...
                    </p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className='chat__name'>Viktoria Leseiko</span>
                        Hey Guys!
                    <span className='chat__timestamp'>
                        3:52pm
                    </span>
                </p>
            </div>

            <div className="chat__footer">
                
            </div>
        </div>
    )
}

export default Chat;
