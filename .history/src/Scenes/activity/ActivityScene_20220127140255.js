import React, { useContext, useEffect } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import useLoadAsset from '../../utils/useLoadAsset';
import ActivityAssetMap from './ActivityAssetMap'
function ActivityScene() {
    const { Bg, Loading } = useLoadAsset(ActivityAssetMap)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;
    
    return <div style>Hello there</div>;
}

export default ActivityScene;