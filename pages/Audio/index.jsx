import React, { useRef, useState } from 'react'

const Audio = ({src, btnName}) => {
    const player = useRef();
    const [isPlaying, setIsPlaying] = useState(false)
    const playAudio = () => {
        player.current.play();
        // setIsPlaying(true);
    }

    const stopAudio = () => {
        player.current.pause();
        player.current.currentTime = 0;
        // setIsPlaying(false);
    }
  return (
    <>
        <button onClick={() => playAudio()}>{btnName}</button>
        <button onClick={() => stopAudio()}>Stop {btnName}</button>\
        {/* {isPlaying &&  */}
        <audio
          ref={player}
          controls
          src={src}>
              Your browser does not support the
              <code>audio</code> element.
        </audio>
        {/* } */}
        
    </>
  )
}

export default Audio