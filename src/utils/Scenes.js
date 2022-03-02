import lottie from 'lottie-web';
import { useContext, useEffect, useState, Fragment, useRef } from 'react'
import { SceneContext } from '../contexts/SceneContext'
import "../styles/app.css"

export default function Scenes({ sprites, Bg = "" }) {
  const { setSceneId, setisLoading, isLoading, transition, setTransition, BG_sound } = useContext(SceneContext)

  const containerRef2 = useRef(null);
  useEffect(() => {
    if (transition && containerRef2.current && isLoading) {
      const ch = lottie.loadAnimation({
        name: "placeholder",
        container: containerRef2.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: transition,
      });
      ch.play()
      ch.addEventListener('complete', () => {
        setisLoading(false)
      })
    }
  }, [transition, isLoading]);

  return (
    <div id="vision">
      {Bg !== "" && <img
        className="Bg_Image"
        id="vision"
        alt="background"
        src={`data:image/svg+xml;utf8,${encodeURIComponent(Bg)}`} />}


      <div
        className="transition_style"
        ref={containerRef2}
        id='placeholder'
        style={{
          opacity: isLoading ? 1 : 0,
          zIndex: isLoading ? 999 : 0,
          width: "220%",
          top: "50%",
          position: 'fixed',
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      ></div>

      {sprites}
    </div>
  )
}
