import React from 'react';
import { useContext, useRef, useEffect } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import IntroMap from './AssetMap';
import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';


export default function Explain() {
    const { Bg, Loading } = useLoadAsset(ExplainMap)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { explain } = Assets

    const Ref = useRef(null);

  return <div></div>;
}
