import React, { useEffect, useState } from "react";
import Boss from "./boss/Boss";
import Boss1Config from "../../../raids/Ini-1/Boss1Config.json";

import "./enemies.css";
import { useDispatch } from "react-redux";
import { damage } from "../../../actions";
import { Raider } from "../../../types";

interface enemyProps {
  raiders: Raider[];
}

const Enemies: React.FC<enemyProps> = props => {
  //component start
  const [RandomInt, setRandomInt] = useState(0);
  const [LiveRaiders, setLiveRaiders] = useState();
  const dispatch = useDispatch();

  let totalBosses = Boss1Config.enemies.boss;
  let Bosses = [];

  for (let i = 0; i < totalBosses; i++) {
    Bosses.push(<Boss key={i} identifier={i.toFixed()}></Boss>);
  }

  useEffect(() => {
    setLiveRaiders(
      props.raiders.filter(raider => {
        return raider.alive;
      })
    );
    console.log(LiveRaiders);
    if (LiveRaiders) {
      setRandomInt(
        LiveRaiders[Math.floor(Math.random() * LiveRaiders.length)]?.RaiderId
      );
      console.log(RandomInt);
    }
  }, [props]);

  //   let LiveRaiders = props.raiders.filter(raider => {
  //     return raider.alive;
  //   });

  //   let fightStart = () => dispatch(damage(35, Math.floor(Math.random() * 10)));
  //   console.log(RandomInt);

  let fightStart = () => dispatch(damage(35, RandomInt));

  useEffect(() => {
    const interval = setInterval(() => {
      fightStart();
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fightStart]);

  return (
    <div className="bosses noselect">
      {Bosses}
      <div className="clearer"></div>
    </div>
  );
};

export default Enemies;
