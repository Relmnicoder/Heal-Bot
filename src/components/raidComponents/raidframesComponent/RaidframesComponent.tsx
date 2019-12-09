import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setRaidAction, damageAction, healAction } from '../../../actions/index'

import RaiderComponent from './raiderComponent/RaiderComponent'
import Boss1Config from '../../../raids/Ini-1/Boss1Config.json'

import "../../../raids/Ini-1/ini-1.css"
import "../RaidComponent.css"
import { Raider, StateStore } from "../../../types"

export default function Raidframes() {

    const raiders = useSelector((state: StateStore) => state.raiders)
    const dispatch = useDispatch()
    useEffect(() => { dispatch(setRaidAction(Raiders())) }, [dispatch])

    let damage = () => dispatch(damageAction(35, Math.floor(Math.random() * 10)))
    let heal = (id: number) => dispatch(healAction(5, id))

    useEffect(() => {
        const interval = setInterval(() => {
          damage()
        }, 1000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);


    return (
        <>
            {raiders ?
                raiders.map((raider: Raider) => (
                    <RaiderComponent onClick={heal} key={raider.RaiderId} raider={raider}></RaiderComponent>
                ))
                : ""}
        </>
    )
}

function Raiders() {
    let totalRaiders = Object.values(Boss1Config.raiders).reduce((a, b) => a + b)
    let Raiders: Raider[] = []
    for (let i = 0; i < totalRaiders; i++) {
        if (i < Boss1Config.raiders.total_tanks) {
            Raiders.push({
                key: i,
                RaiderId: i,
                classRole: "tank",
                alive: true,
                buffs: [],
                debuffs: [],
                maxHp: Boss1Config.raiderConfig.tankHp,
                currentHp: Boss1Config.raiderConfig.tankHp
            })
        }
        else if (i < Boss1Config.raiders.total_tanks + Boss1Config.raiders.total_dps) {
            Raiders.push({
                key: i,
                RaiderId: i,
                classRole: "dps",
                alive: true,
                buffs: [],
                debuffs: [],
                maxHp: Boss1Config.raiderConfig.dpsHp,
                currentHp: Boss1Config.raiderConfig.dpsHp
            })
        }
        else {
            Raiders.push({
                key: i,
                RaiderId: i,
                classRole: "healer",
                alive: true,
                buffs: [],
                debuffs: [],
                maxHp: Boss1Config.raiderConfig.healHp,
                currentHp: Boss1Config.raiderConfig.healHp
            })
        }
    }
    return Raiders
}