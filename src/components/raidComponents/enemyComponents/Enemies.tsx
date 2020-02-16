import React from "react";
import Boss from "./boss/Boss";
import Boss1Config from "../../../raids/Ini-1/Boss1Config.json";

import "./enemies.css";
import { Raider } from "../../../types";

interface enemyProps {
  raiders: Raider[];
}

const Enemies = () => {
  let totalBosses = Boss1Config.enemies.boss;
  let Bosses = [];

  for (let i = 0; i < totalBosses; i++) {
    Bosses.push(<Boss key={i} identifier={i.toFixed()}></Boss>);
  }

  return (
    <div className="bosses noselect">
      {Bosses}
      <div className="clearer"></div>
    </div>
  );
};

export default Enemies;
