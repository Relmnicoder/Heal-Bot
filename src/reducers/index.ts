import { combineReducers } from "redux";
import { raidReducer } from "./raidReducer";
import { spellReducer } from "./spellReducer"

export default combineReducers({
  spellList: spellReducer,
  raiders: raidReducer
});
