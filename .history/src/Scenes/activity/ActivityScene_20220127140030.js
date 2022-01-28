import React, { useEffect } from 'react';

function ActivityScene() {
    useEffect(() => {
        setTimeout(() => {
            setSceneId('/activity')
        }, 3000)
    }, []);
    return <div>Hello there</div>;
}

export default ActivityScene;
