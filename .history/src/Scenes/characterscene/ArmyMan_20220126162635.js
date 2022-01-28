import React from 'react';
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
    return <Scenes
        Bg={Bg}
        sprites={
            <>
                {/* Title */}

                {/* <Image
          src={intro?.sprites[0]}
          alt="txt"
          id="fadeup"
          className="dressing_txt_img" /> */}

                <Image src={intro?.sprites[0]} alt="txt" className="armyMan" />
                <Image src={intro?.sprites[1]} alt="txt" className="doctor" />
              
                {/* <div ref={Ref} className="intro_lottie_container"></div> */}
            </>
        }
    />
  );
}

export default ArmyMan;
