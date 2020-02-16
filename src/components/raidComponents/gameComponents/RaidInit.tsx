import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Raider, StateStore } from "../../../types"

import { damage } from "../../../actions";


function RaidInit() {

    const [RandomInt, setRandomInt] = useState(0);
    const [LiveRaiders, setLiveRaiders] = useState();
    const dispatch = useDispatch();

    const raiders = useSelector((state: StateStore) => state.raiders)


    useEffect(() => {
        setLiveRaiders(
            raiders.filter(raider => {
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
    }, [raiders]);

    //   let LiveRaiders = .raiders.filter(raider => {
    //     return raider.alive;
    //   });

    //   let fightStart = () => dispatch(damage(35, Math.floor(Math.random() * 10)));
    //   console.log(RandomInt);


    let fightStart = () => dispatch(damage(35, RandomInt));

    useEffect(() => {
        if (LiveRaiders?.length > 0) {
            const interval = setInterval(() => {
                fightStart();
            }, 1000);
            return () => clearInterval(interval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fightStart, LiveRaiders]);

    return (
        <>
        </>
    )
}

export default RaidInit
