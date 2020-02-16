import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StateStore } from "../../../types";

import { damage } from "../../../actions";

function RaidInit() {
  const raiders = useSelector((state: StateStore) => state.raiders);

  const [LiveRaiders, setLiveRaiders] = useState();
  const dispatch = useDispatch();

  //set array with living raiders
  useEffect(() => {
    setLiveRaiders(
      raiders.filter(raider => {
        return raider.alive;
      })
    );

  }, [raiders]);

//rerender on click happens because of LiveRaiders
  useEffect(() => {
    if (LiveRaiders?.length > 0) {
      const interval = setInterval(() => {
        const randomRaider = LiveRaiders[Math.floor(Math.random() * LiveRaiders.length)]?.RaiderId
        dispatch(damage(35, randomRaider))
      }, 1000);
      return () => clearInterval(interval)
    }
  }, [LiveRaiders, dispatch] );

  return <></>;
}

export default RaidInit;
