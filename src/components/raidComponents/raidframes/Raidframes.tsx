import React from "react";
import { useSelector } from "react-redux";
import { heal } from "../../../actions/raidActions";

import RaiderComponent from "./raider/Raider";

import "../../../raids/Ini-1/ini-1.css";
import "../Raid.css";
import { Raider, StateStore } from "../../../types";
import { SpellBook } from "../gameComponents/spells/spells";

export default function Raidframes() {
  const ss = new SpellBook();
  const raiders = useSelector((state: StateStore) => state.raiders);

  let healTarget = (id: number) => ss.basicHot(id);

  return (
    <>
      {raiders
        ? raiders.map((raider: Raider) => (
            <RaiderComponent
              onClick={healTarget}
              key={raider.RaiderId}
              raider={raider}
            ></RaiderComponent>
          ))
        : ""}
    </>
  );
}
