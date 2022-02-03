import { useState, useEffect, useContext } from "react"
import Intro from "./Scenes/intro/Intro";
import GameContainer from "./utils/GameContainer"
import Router from "./utils/Router"
import "./styles/app.css"
import Explain from "./Scenes/explain/Explain";
import ArmyMan from "./Scenes/characterScene/ArmyMan";
import Dentist from "./Scenes/characterScene/Dentist";
import Doctor from "./Scenes/characterScene/Doctor";
import FireFighter from "./Scenes/characterScene/FireFighter";
import FloorCleaner from "./Scenes/characterScene/FloorCleaner";
import Gardener from "./Scenes/characterScene/Gardener";
import GarbageCollector from "./Scenes/characterScene/GarbageCollector";
import Police from "./Scenes/characterScene/Police";
import Guard from "./Scenes/characterScene/Guard";
import Teacher from "./Scenes/characterScene/Teacher";
import ActivityExplainScene01 from "./Scenes/activity/ActivityScene01";
import ArmyManActivity from "./Scenes/activity/characteractivity/ArmyManActivity";
import ChooseCharacter from "./Scenes/activity/characteractivity/ChooseCharacter";
import DoctorActivity from "./Scenes/activity/characteractivity/DoctorActivity";
import { Howl } from "howler";
import GardenerActivity from "./Scenes/activity/characteractivity/GardenerActivity";
import PoliceActivity from "./Scenes/activity/characteractivity/PoliceActivity";
import TeacherActivity from "./Scenes/activity/characteractivity/TeacherActivity";
import Activity01End from "./Scenes/activity/Activity01End";
import ActivityExplainScene02 from "./Scenes/activity/ActivityScene02";
import GarbageCollectorActivity from "./Scenes/activity/characteractivity/GarbageCollectorActivity";
import DentistActivity from "./Scenes/activity/characteractivity/DentistActivity";
import FloorCleanerActivity from "./Scenes/activity/characteractivity/FloorCleanerActivity";
import GuardActivity from "./Scenes/activity/characteractivity/GuardActivity";
import FireFighterActivity from "./Scenes/activity/characteractivity/FireFighterActivity";
import Activity02End from "./Scenes/activity/Activity02End";
import useSound from 'use-sound';

function App() {

  const [Load, setLoad] = useState(true);

  useEffect(() => {

    // var bgsound = new Howl({
    //   src: [`/internal/audio/Entire_video_song.mp3`],
    //   loop: true
    // });
    // var id1 = bgsound.play();
    // bgsound.volume(0.1, id1);
    setTimeout(() => {
      setLoad(false)
    }, 3000)
  }, []);


  // if (Load) return (
  //   <div className="intro_Loading_screen">
  //     Loading
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //   </div>
  // )

  return (
    <GameContainer>
      <Router sceneId="/">
        <Intro />
      </Router>
      <Router sceneId="/explain">
        <Explain />
      </Router>
      <Router sceneId="/armyman">
        <ArmyMan />
      </Router>
      <Router sceneId="/dentist">
        <Dentist />
      </Router>
      <Router sceneId="/doctor">
        <Doctor />
      </Router>
      <Router sceneId="/firefighter">
        <FireFighter />
      </Router>
      <Router sceneId="/floorcleaner">
        <FloorCleaner />
      </Router>
      <Router sceneId="/gardener">
        <Gardener />
      </Router>
      <Router sceneId="/garbagecollector">
        <GarbageCollector />
      </Router>
      <Router sceneId="/police">
        <Police />
      </Router>
      <Router sceneId="/guard">
        <Guard />
      </Router>
      <Router sceneId="/teacher">
        <Teacher />
      </Router>
      <Router sceneId="/activity01">
        <ActivityExplainScene01 />
      </Router>
      <Router sceneId="/activity02">
        <ActivityExplainScene02 />
      </Router>
      <Router sceneId="/choosecharacter">
        <ChooseCharacter />
      </Router>
      <Router sceneId="/armymanactivity">
        <ArmyManActivity />
      </Router>
      <Router sceneId="/gardeneractivity">
        <GardenerActivity />
      </Router>
      <Router sceneId="/doctoractivity">
        <DoctorActivity />
      </Router>
      <Router sceneId="/policeactivity">
        <PoliceActivity />
      </Router>
      <Router sceneId="/teacheractivity">
        <TeacherActivity />
      </Router>
      <Router sceneId="/garbagecollectoractivity">
        <GarbageCollectorActivity />
      </Router>
      <Router sceneId="/dentistactivity">
        <DentistActivity />
      </Router>
      <Router sceneId="/floorcleaneractivity">
        <FloorCleanerActivity />
      </Router>
      <Router sceneId="/guardactivity">
        <GuardActivity />
      </Router>
      <Router sceneId="/firefighteractivity">
        <FireFighterActivity />
      </Router>
      <Router sceneId="/activity01end">
        <Activity01End />
      </Router>
      <Router sceneId="/activity02end">
        <Activity02End />
      </Router>

    </GameContainer>
  );
}

export default App;
