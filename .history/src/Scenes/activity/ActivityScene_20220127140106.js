import React, { useEffect } from 'react';
import useLoadAsset from '../../utils/useLoadAsset';

function ActivityScene() {
    const { Bg, Loading } = useLoadAsset(Acti)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;
    useEffect(() => {
        setTimeout(() => {
            setSceneId('/activity')
        }, 3000)
    }, []);
    return <div>Hello there</div>;
}

export default ActivityScene;
