import { useEffect, useState } from 'react';
import '.././styles/app.css'
import { LoadImage } from './loadImage';
export default function GameContainer({ children }) {
  const ratio = 1600 / 900
  const [width, setwidth] = useState(window.innerWidth);
  const [height, setheight] = useState(width / ratio);

  const onResize = () => {
    setwidth(window.innerWidth)
    setheight(window.innerWidth / ratio)
  }

  useEffect(() => {
    window.addEventListener("resize", () => onResize())

    return () => {
      window.removeEventListener("resize", () => onResize())
    }
  }, [])

  useEffect(() => {
    if (height > window.innerHeight) {
      setheight(window.innerHeight)
      setwidth(window.innerHeight * ratio)
    }
  }, [height, ratio])

  const [cursorHand, setCursorHand] = useState(null)
  const loadBgImage = async () => {
    const handIcon = await LoadImage(`ee01_ow_thss_pl1/icons/HAND/SB_26_hand.svg`);
    setCursorHand(handIcon);
  };

  const styles = {
    height: `${height}px`, width: `${width}px`, position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)", cursor: 'url({cursorHand}),auto'
  }

  return <div className="GameContainer" style={styles}>
    {children}
  </div >;
}
