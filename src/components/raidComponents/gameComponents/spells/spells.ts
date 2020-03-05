// import { useDispatch } from "react-redux"
import { heal } from "../../../../actions/raidActions"
import { spellCast } from "../../../../actions/spellActions"
import { Dispatch } from "react"
// const dispatch = useDispatch()

export const basicHeal = (dispatch:Dispatch<any>, id:number) => {
    setTimeout(()=> {
        dispatch(heal(5, id))
        dispatch(spellCast(id))

    }, 1000)
}