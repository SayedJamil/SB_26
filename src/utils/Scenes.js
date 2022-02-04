import lottie from 'lottie-web';
import { useContext, useEffect, useState, Fragment, useRef } from 'react'
import { SceneContext } from '../contexts/SceneContext'
import "../styles/app.css"
// import apple from "./Apple.svg"

export default function Scenes({ sprites, Bg = "" }) {
  const { setSceneId, setisLoading, isLoading, transition, setTransition } = useContext(SceneContext)

  const containerRef2 = useRef(null);
  useEffect(() => {
    if (transition && containerRef2.current && isLoading) {
      const ch = lottie.loadAnimation({
        name: "placeholder",
        container: containerRef2.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: transition,
      });
    }

  }, [transition, isLoading]);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setisLoading(false)
      }, 2000)
    }
  }, [isLoading])
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
          zIndex: isLoading ? 9999 : 0,
          width: "200%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      ></div>

      {sprites}
    </div>
  )
}
