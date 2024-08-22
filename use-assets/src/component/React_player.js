import React from "react";
import ReactPlayer from "react-player";
const React_player = () =>{
    return(
        <div>
            <h1>Play a video using react-player module</h1>
            // play a youtube video in react app
            <ReactPlayer url = 'https://youtu.be/rKd-J-SjUB4?si=9Uw6-fGg9z-UtgVg'
            playing = {true} />
        </div>
    );
};

export default React_player;