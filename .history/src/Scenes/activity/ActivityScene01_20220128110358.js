import React, { useContext, useEffect } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import useLoadAsset from '../../utils/useLoadAsset';
import '../../styles/activity.css'
import ActivityAssetMap from './ActivityAssetMap'
function ActivityExplainScene01() {
    const { Bg, Loading } = useLoadAsset(ActivityAssetMap)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;

    return (
        <div className='activity'>Hello there</div>
    );
}

export default ActivityExplainScene;
