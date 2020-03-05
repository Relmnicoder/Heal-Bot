// import { useDispatch } from "react-redux"
import { heal } from "../../../../actions/raidActions"
import { spellCast } from "../../../../actions/spellActions"
import { store } from "../../../.."
export class SpellBook {

    public basicHeal = ( id:number) => {
        setTimeout(()=> {
            store.dispatch(heal(5, id))
            store.dispatch(spellCast(id))
    
        }, 1000)
}

}