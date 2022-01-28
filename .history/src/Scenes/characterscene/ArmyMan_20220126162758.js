import lottie from 'lottie-web';
import React, { useContext, useRef } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneMap from './CharacterSceneAssetMap';

function ArmyMan() {
    const { Bg, Loading } = useLoadAsset(CharacterSceneMap)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;

    const Ref = useRef(null);

    useEffect(() => {
        if (Assets.characterscene && Ref.current && !Loading) {
            const ch = lottie.loadAnimation({
                name: "placeholder",
                container: Ref.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: characterscene?.lottie[0],
            })
        }
    }, [Assets, Loading])
    return (<Scenes
        Bg={Bg}
        sprites={
            <>
                <Image src={characterscene?.sprites[0]} alt="txt" className="armyMan" />
                <Image src={characterscene?.sprites[1]} alt="txt" className="doctor" />
              
                {/* <div ref={Ref} className="intro_lottie_container"></div> */}
            </>
        }
    />
  );
}

export default ArmyMan;
