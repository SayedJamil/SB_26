import React from 'react';

function ActivityScene() {
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 3000)
    }, []);
    return <div>Hello there</div>;
}

export default ActivityScene;
