
type pBI = {
    mana: number,
    castTime: number,
}

const pBI = {
    mana: 100,
    castTime: 0
}

export const playerReducer = (playerBattleInfo:pBI = pBI, action: {type: string, payload:pBI}) => {
    switch (action.type) {
        case "SET_PLAYERBATTLEINFO":
            return { mana: action.payload.mana, castTime: action.payload.castTime };
        default:
            return playerBattleInfo;
    }
};
