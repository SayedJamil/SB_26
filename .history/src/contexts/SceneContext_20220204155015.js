import { createContext, useState, useEffect } from "react"


export const SceneContext = createContext();

export default function SceneContextProvider({ children }) {
  const [SceneId, setSceneId] = useState("/")
  const [isLoading, setisLoading] = useState(true)
  const [transition, setTransition] = useState(null);
  // state to manage sounds and images for each scene
  const [Assets, setAssets] = useState({})
  const [character, setCharacter] = useState('doctor')
  const [num, setNum] = useState('09')
  const [charNum, setCharNum] = useState(8)
  const [toolNum, setToolNum] = useState(15)
  const [stars, setStars] = useState(1)

  // loading part
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 3500)

  }, [isLoading])

  return (
    <SceneContext.Provider value={{ SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, character, setCharacter, num, setNum, charNum, setCharNum, toolNum, setToolNum, stars, setStars, transition, setTransition }}>
      {children}
    </SceneContext.Provider>
  )
}
