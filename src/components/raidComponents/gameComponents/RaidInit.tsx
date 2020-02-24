import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StateStore, Spell } from "../../../types";

import { damage } from "../../../actions/raidActions";
import { setSpellList } from "../../../actions/spellActions";

function RaidInit() {
  const raiders = useSelector((state: StateStore) => state.raiders);

  const LiveRaiders = useRef<any>([{}]);
  const dispatch = useDispatch();

  //testing
  useEffect(() => {
    dispatch(setSpellList(Spells()));
  }, [dispatch]);
  //testing

  //set array with living raiders
  useEffect(() => {
    LiveRaiders.current = raiders.filter(raider => {
      return raider.alive;
    });
  }, [raiders]);

  //rerender on click happens because of LiveRaiders
  useEffect(() => {
    const interval = setInterval(() => {
      const randomRaider =
        LiveRaiders.current[
          Math.floor(Math.random() * LiveRaiders.current.length)
        ]?.RaiderId;
      dispatch(damage(35, randomRaider));
    }, 1000);
    return () => clearInterval(interval);
  }, [LiveRaiders, dispatch]);

  return <></>;
}

export default RaidInit;

const Spells = () => {
  let SpellList: Spell[] = [{castable: true, spellName: "basic Heal", }];

  return SpellList;
};
