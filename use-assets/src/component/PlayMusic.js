import React, {useState} from "react"
const PlayMusic = () => {
    const bird1 = new Audio( 
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
      ); 
     
      const bird2 = new Audio( 
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
      ); 
    
    const [button1 , setButton1] = useState("Play")
    const [button2 , setButton2] = useState("Play")

    function toggle1(){
        if(bird1.paused){
            setButton1("Pause");
            bird1.play();
        }else{
            setButton1("Play");
            bird1.pause();
        }
    }

    function toggle2(){
        if(bird2.paused){
            bird2.play();
            setButton2("Pause");
        }else{
            bird2.pause();
            setButton2("Play");
        }
    }

    return ( 
        <div> 
            <h1>Play Music</h1>
            <h3>Track 01</h3>
          <button onClick={toggle1}>{button1}</button> <br/>
          <h3>Track 02</h3>
          <button onClick={toggle2}>{button2}</button> <br/>
        </div> 
      ); 

}

export default PlayMusic;