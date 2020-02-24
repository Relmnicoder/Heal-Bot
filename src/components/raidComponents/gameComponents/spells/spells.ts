import { useDispatch } from "react-redux"
import { heal } from "../../../../actions/raidActions"
import { casted } from "../../../../actions/spellActions"
const dispatch = useDispatch() // THIS IS A HOOK. FIND A WAY TO DISPATCH WITHOUT HOOKS FUCK

export const basicHeal = (id:number) => {
    dispatch(heal(5, id))
    dispatch(casted(id))
}