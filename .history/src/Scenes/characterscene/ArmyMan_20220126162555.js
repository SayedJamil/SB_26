import React from 'react';

function ArmyMan() {
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
                <button
                    className="play_btn"
                    onClick={() => {
                        PlayAudio(intro?.sounds[0])
                        setSceneId("/explain")
                    }}>
                    Play
                </button>

                <Image src={intro?.sprites[0]} alt="txt" className="armyMan" />
                <Image src={intro?.sprites[1]} alt="txt" className="doctor" />
                <Image src={intro?.sprites[2]} alt="txt" className="fireFighter" />
                <Image src={intro?.sprites[3]} alt="txt" className="garbageCollector" />
                <Image src={intro?.sprites[4]} alt="txt" className="police" />
                <Image src={intro?.sprites[5]} alt="txt" className="guard" />
                <Image src={intro?.sprites[6]} alt="txt" className="title" />
                {/* <div ref={Ref} className="intro_lottie_container"></div> */}
            </>
        }
    />
  );
}

export default ArmyMan;
