import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { heal } from '../../../actions/index'

import RaiderComponent from './raider/Raider'

import "../../../raids/Ini-1/ini-1.css"
import "../Raid.css"
import { Raider, StateStore } from "../../../types"

export default function Raidframes() {

    const raiders = useSelector((state: StateStore) => state.raiders)
    const dispatch = useDispatch()


    let healTarget = (id: number) => dispatch(heal(5, id))


    return (
        <>
            {raiders ?
                raiders.map((raider: Raider) => (
                    <RaiderComponent onClick={healTarget} key={raider.RaiderId} raider={raider}></RaiderComponent>
                ))
                : ""}
        </>
    )
}

