import { combineReducers } from "redux";
import { raidReducer } from "./raidReducer";
import { spellReducer } from "./spellReducer"
import { OtSystemReducer } from "./OtsReducer";
import { playerReducer } from "./playerReducer";

export default combineReducers({
  spellList: spellReducer,
  raiders: raidReducer,
  otSystem: OtSystemReducer,
  playerStats: playerReducer

});
